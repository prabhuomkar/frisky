# Forming Calls

 - [The GraphQL endpoint](#the-graphql-endpoint)  
 - [Communicating with GraphQL](#communicating-with-graphql)  
 - [About query operations](#about-query-operations)  
 - [Example query](#example-query)

## The GraphQL endpoint
The REST API usually has numerous endpoints; the GraphQL API v4 has a single endpoint:
```
https://frisky.herokuapp.com/graphql
```
The endpoint remains constant no matter what operation you perform.

## Communicating with GraphQL
Because GraphQL operations consist of multiline JSON, GitHub recommends using the Explorer to make GraphQL calls. You can also use cURL or any other HTTP-speaking library. 
   
In REST, HTTP verbs determine the operation performed. In GraphQL, you'll provide a JSON-encoded body whether you're performing a query or a mutation, so the HTTP verb is POST. The exception is an introspection query, which is a simple GET to the endpoint. For more information on GraphQL versus REST, see "Migrating from REST to GraphQL."  
  
To query GraphQL using cURL, make a POST request with a JSON payload. The payload must contain a string called query:
```
curl -X POST -d " \
 { \
   \"query\": \"query { shows { name }}\" \
 } \
" https://frisky.github.com/graphql

```

> **Note**: The string value of "query" must escape newline characters or the schema will not parse it correctly. For the POST body, use outer double quotes and escaped inner double quotes.

## About query operations
There are usually two types of allowed operations but in frisky's GraphQL API there is only one i.e. queries (and no mutations). Comparing GraphQL to REST, queries operate like GET requests, while mutations operate like POST/PATCH/DELETE.  
  
### About queries
GraphQL queries return only the data you specify. To form a query, you must specify fields within fields (also known as nested subfields) until you return only scalars.
  
Queries are structured like this:  
  
```
query {
  JSON objects to return
}
```
For a real-world example, see "[Example query](#example-query)"


## Example Query
Let's walk through a more complex query and put this information in context.  
  
The following query looks up shows and its episodes:  
  
[Run in Explorer]()
```
query {
  shows {
    name
    year
    genres
    episodes {
        name
        poster
        description
    }
  }
}
```