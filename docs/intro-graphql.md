# Introduction to GraphQL

## GraphQL terminology
The Frisky GraphQL API represents an architectural and conceptual shift from the old REST APIs. 
You will likely encounter some new terminology in the GraphQL API [reference docs](overview.md).

### Schema
A schema defines a GraphQL API's type system. It describes the complete set of possible data (objects, fields, relationships, everything) that a client can access. Calls from the client are validated and executed against the schema. A client can find information about the schema via introspection. A schema resides on the GraphQL API server. For more information, see "Discovering the GraphQL API."

### Field
A field is a unit of data you can retrieve from an object. As the official GraphQL docs say: "The GraphQL query language is basically about selecting fields on objects."

The official spec also says about fields:

> All GraphQL operations must specify their selections down to fields which return scalar values to ensure an unambiguously shaped response.

This means that if you try to return a field that is not a scalar, schema validation will throw an error. You must add nested subfields until all fields return scalars.

### Argument
An argument is a set of key-value pairs attached to a specific field. Some fields require an argument. Mutations require an input object as an argument.

### Implementation
A GraphQL schema may use the term implements to define how an object inherits from an interface.

Here's a contrived example of a schema that defines interface X and object Y:

```
interface X {
  some_field: String!
  other_field: String!
}

type Y implements X {
  some_field: String!
  other_field: String!
  new_field: String!
}
```
This means object Y requires the same fields/arguments/return types that interface X does, while adding new fields specific to object Y. (The ! means the field is required.)

In the reference docs, you'll find that:  
 - Each object lists the interface(s) from which it inherits under Implements.
 - Each interface lists the objects that inherit from it under Implementations.