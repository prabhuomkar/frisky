# Query
Every GraphQL schema has a root type for both queries and mutations. The query type defines GraphQL operations that retrieve data from the server.

## Query Types

**shows** ([Show!](interfaces.md#show))
Look up for shows   

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``_id`` | ``ID`` | Unique identifier of the show |
| ``name`` | ``String`` | The name of the show in plain text |
| ``description`` | ``String`` | The description of the show in plain text |
| ``numberOfSeasons`` | ``Int`` | The total count of seasons for the given show |
| ``year`` | ``Int`` | The year when the show was released |

**episodes** ([Episode!](interfaces.md#episode))
Look up for episodes

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``_id`` | ``ID`` | Unique identifier of the show |
| ``name`` | ``String`` | The name of the episode in plain text |
| ``description`` | ``String`` | The description of the episode in plain text |
| ``seasonNumber`` | ``Int`` | The season number to which this episode belongs |
| ``episodeNumber`` | ``Int`` | The episode number of the given episode |
| ``poster`` | ``String`` | The episode's poster or its thumbnail |

## Fields

**posters** ([Posters!](interfaces.md#posters))
Look up for different types of posters of the show   

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``background`` | ``[String]`` | The description of the show in plain text |
| ``horizontal`` | ``[String]`` | The list of horizontally oriented photos |
| ``vertical`` | ``[String]`` | The list of vertically oriented photos. |

**serviceProvider** ([[ServiceProvider!]](interfaces.md#serviceprovider))
Look up for service provider of the show

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``id`` | ``String`` | The unique/entity id of a show used by the given service provider |
| ``name`` | ``String`` | The name of the service provider in plain text |