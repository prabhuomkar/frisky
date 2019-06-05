const { buildSchema } = require('graphql')

module.exports = buildSchema(`
type Episode {
    _id: ID!
    name: String!
    description: String
    seasonNumber: Int!
    episodeNumber: Int!
    poster: String!
    createdAt: String!
    updatedAt: String!
}

type Poster {
    vertical: [String]
    horizontal: [String]
    background: [String]
}

type Show {
    _id: ID!
    name: String!
    description: String
    year: Int!
    numberOfSeasons: Int!
    creators: [String]
    starring: [String]
    directors: [String]
    episodes: [Episode!]!
    createdAt: String!
    updatedAt: String!
}

type RootQuery {
    shows: [Show!]!
    episodes: [Episode!]!
}

schema {
    query: RootQuery
}
`)
