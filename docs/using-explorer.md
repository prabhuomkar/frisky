# Using the Explorer

1. [About the Explorer](#about-the-explorer)
2. [Using GraphiQL](#using-graphiql)
3. [Troubleshooting errors](#troubleshooting-errors)

## About the Explorer
[GraphQL Explorer](https://frisky.herokuapp.com/graphql) is an instance of [GraphiQL](https://github.com/graphql/graphiql), which is a "graphical interactive in-browser GraphQL IDE."

> **Note**: Frisky has no mutations in the Explorer, neither you can use them in your own GraphiQL instance.

## Using GraphiQL

> **Note**: For more information about why POST is the method, see "[Communicating with GraphQL](forming-calls.md#communicating-with-graphql)."

## Troubleshooting errors
Because GraphQL is introspective, the Explorer supports:

Intelligent typeaheads aware of the current schema
Validation error previews as you type
If you enter a query that is not well-formed or does not pass schema validation, a popup warns you of an error. If you run the query, the error returns in the response pane.

A GraphQL response contains several keys: a data hash and an errors array.