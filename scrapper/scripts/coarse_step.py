import requests
import re
import json
from surrealdb import Surreal
import asyncio


URL = "https://www.bbcgoodfood.com/"


async def proccess_items(data: dict, db: Surreal):
    items = data["searchResults"]["items"]
    for item in items:
        id = item["id"]
        print(id)
        item["expanded"] = False
        await db.create("recipe", item)


def parse_page_for_JSON(page: str):
    matcher = re.compile(r"id=\"__POST_CONTENT__\">(.*?)<\/script>")
    return json.loads(matcher.findall(page)[0])


def get_page(page: int = 1, limit=100):
    with requests.Session() as s:
        response = s.get(URL + "search")
        response = s.get(
            f"{URL}search?q=&tab=recipe&sort=rating&page={page}&limit={limit}"
        )
        if not response.ok:
            raise Exception("network error")

        data = response.text
        return data


async def main():
    async with Surreal("ws://localhost:8000/rpc") as db:
        await db.signin({"user": "root", "pass": "root"})
        await db.use("recipes", "recipes")

        i = 1
        PAGE_SIZE = 500
        while True:
            print(f"loading {(i-1)*PAGE_SIZE} - {(i)*PAGE_SIZE}")
            page = get_page(i, PAGE_SIZE)
            json_out = parse_page_for_JSON(page)
            await proccess_items(json_out, db)
            i += 1
            print("loaded")


if __name__ == "__main__":
    asyncio.run(main())
    # # run scraper
