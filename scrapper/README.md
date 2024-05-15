# Scrapper

## DB

run the database with

- `docker compose -f docker-compose.yml up`  
- `podman-compose -f docker-compose.yml up`  

Admin frontend is available [here](https://surrealist.app/query)  
Credentials: 

- url: `ws://localhost:8000/rpc`  
- namespce: `recipes`  
- database: `recipes`  
- user: `root`  
- pass: `root`  


some fun queries:  

Sample of a parsed entry

```sql
select * from recipe where expanded == True limit 1
```

Best recipes

```sql
select title,canonicalUrl, userRatings.avg, userRatings.total, expanded
from recipe
ORDER BY userRatings.avg NUMERIC DESC, userRatings.total NUMERIC DESC
```

Sad recipes

```sql
select title,canonicalUrl, userRatings.avg, userRatings.total, expanded
from recipe
where mantis.emotion.sadness.level ="high"
```

This query should return a reasonably clean output  

```sql
SELECT

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

FROM recipe START 3 LIMIT 1;
```
