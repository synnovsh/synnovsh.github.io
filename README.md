## Gatsby
In `/web` run `gatsby develop`
[http://localhost:8000/](http://localhost:8000/)

## Gatsby with Sanity
* [gatsby-source-sanity](https://github.com/sanity-io/gatsby-source-sanity#graphql-api)
* [Sanity GraphQL beta docs](https://www.sanity.io/help/graphql-beta)

In `/studio` run `sanity graphql deploy [--dataset dataset]`. 

You should redeploy the GraphQL API everytime you make changes to the schema that you want to use in Gatsby

Explore [http://localhost:8000/___graphql](http://localhost:8000/___graphql) after running gatsby develop to understand the created data and create a new query and checking available collections and fields by typing CTRL + SPACE.

Run queries against `https://<yourProjectId>.api.sanity.io/v1/graphql/<dataset>/default`

## Deployment
In `/web` run `npm run deploy`