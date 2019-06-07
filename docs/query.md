# Query
Every GraphQL schema has a root type for both queries and mutations. The query type defines GraphQL operations that retrieve data from the server.

## Query Types

**shows** ([Show!](interfaces.md#show))
Look up for shows   

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``limit`` | ``Int`` | Limit the number of shows |
| ``offset`` | ``Int`` | Skip few shows from the start |
| ``orderBy`` | ``ShowOrderByInput`` | Sort by some fields of the show |
| ``where`` | ``ShowWhereInput`` | Find by specific value of the fields |

**episodes** ([Episode!](interfaces.md#episode))
Look up for episodes

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``limit`` | ``Int`` | Limit the number of episodes |
| ``offset`` | ``Int`` | Skip few episodes from the start |
| ``orderBy`` | ``EpisodeOrderByInput`` | Sort by some fields of the episode |
| ``where`` | ``EpisodeWhereInput`` | Find by specific value of the fields |

## Fields

**orderBy** ([ShowOrderByInput](interfaces.md#show))
Ordering by fields for Shows 

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``_id`` | ``ID`` | Unique identifier of the show |
| ``name`` | ``String`` | The name of the show in plain text |
| ``numberOfSeasons`` | ``Int`` | The total count of seasons for the given show |
| ``year`` | ``Int`` | The year when the show was released |
| ``episodes`` | ``EpisodeOrderByInput`` | The episodes of the show |

**where** ([ShowWhereInput](interfaces.md#episode))
Look up by field values for shows

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``_id`` | ``ID`` | Unique identifier of the show |
| ``name`` | ``String`` | The name of the episode in plain text |
| ``numberOfSeasons`` | ``Int`` | The total count of seasons for the given show |
| ``year`` | ``Int`` | The year when the show was released |
| ``genres`` | ``[String]`` | The list of genres for the given show |
| ``serviceProviders`` | ``[String]`` | Look up for service provider of the show |
| ``episodes`` | ``EpisodeWhereInput`` | The episodes of the show |

**orderBy** ([EpisodeOrderByInput](interfaces.md#show))
Ordering by fields for Episodes

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``_id`` | ``ID`` | Unique identifier of the show |
| ``name`` | ``String`` | The name of the show in plain text |
| ``seasonNumber`` | ``Int`` | The season number to which this episode belongs |
| ``episodeNumber`` | ``Int`` | The episode number of the given episode |

**where** ([EpisodeWhereInput](interfaces.md#episode))
Look up by field values for shows

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``_id`` | ``ID`` | Unique identifier of the show |
| ``name`` | ``String`` | The name of the episode in plain text |
| ``seasonNumber`` | ``Int`` | The season number to which this episode belongs |
| ``episodeNumber`` | ``Int`` | The episode number of the given episode |

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

**posters** ([Posters!](interfaces.md#posters))
Look up for different types of posters of the show   

| Argument | Type | Description |
|-------------------|--------------|-------------|
| ``background`` | ``[String]`` | The description of the show in plain text |
| ``horizontal`` | ``[String]`` | The list of horizontally oriented photos |
| ``vertical`` | ``[String]`` | The list of vertically oriented photos. |
