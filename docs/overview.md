# Overview

Here are some quick links to get you up and running with the GraphQL API:

- [Root endpoint](forming-calls.md)

## About GraphQL
The GraphQL data query language is:

- A [specification](https://graphql.github.io/graphql-spec/June2018/). The spec determines the validity of the schema on the API server. The schema determines the validity of client calls.
- [Strongly typed](#about-the-graphql-schema-reference). The schema defines an API's type system and all object relationships.
- [Hierarchical](forming-calls.md). The shape of a GraphQL call mirrors the shape of the JSON data it returns. Nested fields let you query for and receive only the data you specify in a single round trip.
- **An application layer**. GraphQL is not a storage model or a database query language. The graph refers to graph structures defined in the schema, where nodes define objects and edges define relationships between objects. The API traverses and returns application data based on the schema definitions, independent of how the data is stored.

## Why Frisky is using GraphQL
Frisky chose GraphQL for our API because it offers significantly more flexibility for our users. The ability to define precisely the data you want—and only the data you want—is a powerful advantage over the REST API endpoints. GraphQL lets you replace multiple REST requests with a single call to fetch the data you specify.

## About the GraphQL schema reference
The docs in the sidebar are generated from the Frisky GraphQL schema. All calls are validated and executed against the schema. Use these docs to find out what data you can call:  
- Allowed operations: queries.
- Schema-defined types: scalars and interfaces
You can access this same content via the Explorer Docs sidebar. Note that you may need to rely on both the docs and the schema validation to successfully call the GraphQL API.  
For other information, such as authentication and rate limit details, check out the guides.

## Public schema
Coming Soon!  
