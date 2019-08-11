## Gatsby
In `/web` run `gatsby develop` to [http://localhost:8000/](http://localhost:8000/)

### GraphiQL
is the GraphQL integrated development environment (IDE) found at [http://localhost:8000/___graphql](http://localhost:8000/___graphql).

* `Ctrl + Space ` to bring up the autocomplete window
* `Ctrl + Enter` to run the GraphQL query. 

Run queries against `https://<yourProjectId>.api.sanity.io/v1/graphql/<dataset>/default`


## Sanity as source
* [gatsby-source-sanity](https://github.com/sanity-io/gatsby-source-sanity#graphql-api)
* [Sanity GraphQL beta docs](https://www.sanity.io/help/graphql-beta)

In `/studio` run `sanity graphql deploy [--dataset dataset]`. 

You should redeploy the GraphQL API everytime you make changes to the schema that you want to use in Gatsby

## Deployment
In `/web` run `npm run deploy`