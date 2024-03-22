import requests
import re
import json
from surrealdb import Surreal
import asyncio


URL = "https://www.bbcgoodfood.com"


def parse_page_for_JSON(page: str):
    matcher = re.compile(r"id=\"__POST_CONTENT__\">(.*?)<\/script>")
    data = matcher.findall(page)[0]
    data = json.loads(data)
    del data["pockets"]
    del data["adSettings"]
    del data["postMeta"]
    del data["taxonomies"]
    del data["targeting"]
    del data["promo"]
    return data


def get_page(item_url):
    with requests.Session() as s:
        final_url = f"{URL}{item_url}"
        response = s.get(final_url)
        if not response.ok:
            raise Exception("network error")
        data = response.text
        return data


async def main():
    async with Surreal("ws://localhost:8000/rpc") as db:
        await db.signin({"user": "root", "pass": "root"})
        await db.use("recipes", "recipes")

        while True:
            data = await db.query(
                "select * from recipe where expanded == false limit 1"
            )
            if len(data[0]["result"]) == 0:
                break

            item_url = data[0]["result"][0]["url"]
            id = data[0]["result"][0]["id"]
            try:
                page_text = get_page(item_url)
                data = parse_page_for_JSON(page_text)
                data["expanded"] = True
                await db.update(id, data)
                print(item_url)
            except:
                print(f"PAGE ERRORED OUT FOR {id}")
                await db.delete(id)


if __name__ == "__main__":
    asyncio.run(main())
    # # run scraper
