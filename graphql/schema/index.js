const { buildSchema } = require('graphql')

module.exports = buildSchema(`
type Episode {
    _id: ID!
    name: String!
    description: String
    seasonNumber: Int!
    episodeNumber: Int!
    poster: String!
}

type Posters {
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
    genres: [String]
    episodes: [Episode!]!
    posters: Posters!
    serviceProviders: [String!]!
}

input ShowWhereInput {
    _id: String
    name: String
    year: Int
    numberOfSeasons: Int
    genres: [String]
    serviceProviders: [String]
    episodes: EpisodeWhereInput
}

input ShowOrderByInput {
    _id: Int
    name: Int
    year: Int
    numberOfSeasons: Int
    episodes: EpisodeOrderByInput
}

input EpisodeWhereInput {
    _id: String
    name: String
    seasonNumber: Int
    episodeNumber: Int
}

input EpisodeOrderByInput {
    _id: Int
    name: Int
    seasonNumber: Int
    episodeNumber: Int
}

type Query {
    shows(limit: Int = 10, offset: Int = 0, orderBy: ShowOrderByInput, where: ShowWhereInput): [Show!]!
    episodes(limit: Int = 10, offset: Int = 0, orderBy: EpisodeOrderByInput, where: EpisodeWhereInput): [Episode!]!
    search(query: String!, limit: Int = 10, offset: Int = 0, orderBy: ShowOrderByInput, where: ShowWhereInput): [Show!]!
}

schema {
    query: Query
}
`)
