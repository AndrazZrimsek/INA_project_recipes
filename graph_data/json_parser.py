import requests
import re
import json
from surrealdb import Surreal
import asyncio


def flatten_extend(matrix):
    flat_list = []
    for row in matrix:
        flat_list.extend(row)
    return flat_list


query = """SELECT

    id,
    (authors.name) AS authors,
    canonicalUrl AS url,
    cookAndPrepTime,
    description,
    image.url AS image,
    array::flatten(select * from ingredients.ingredients) AS ingredients ,
    methodSteps.content.data.value  AS instructions,
    pageUrl AS URL,
    title,
    slug,
    userRatings,
    nutritionalInfo,
    permutiveModel.article.tags AS tags

    OMIT ingredients.ingredientText,
        ingredients.glossaryLink,
        ingredients.`@type`,
        ingredients.`@id`,
        ingredients.term.`@type`,
        ingredients.term.`@id`,
        ingredients.term.meta,
        ingredients.term.taxonomy,
        userRatings.isHalfStar

FROM recipe LIMIT {} START {};"""

PAGE_SIZE = 100
MAX = 10000

out = []


async def main():
    async with Surreal("ws://localhost:8000/rpc") as db:
        await db.signin({"user": "root", "pass": "root"})
        await db.use("recipes", "recipes")

        start = 0

        while start < MAX:
            data = await db.query(query.format(PAGE_SIZE, start))
            if len(data[0]["result"]) == 0:
                break
            data = data[0]["result"]

            out.append(data)

            start += PAGE_SIZE
            print(start)


if __name__ == "__main__":
    asyncio.run(main())

    with open(f"out_{MAX}.json", "w") as f:
        json.dump(flatten_extend(out), f)
