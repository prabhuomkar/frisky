# Interfaces
Interfaces serve as parent objects from which other objects can inherit.  
An interface has its own list of named fields that are shared by implementing objects.

## Show
Represents a series or show

### Fields

##### name ([String!](scalars.md#string))
The name of the show in plain text.

##### description ([String](scalars.md#string))
The description of the show in plain text.

##### _id ([ID!](scalars.md#id))

##### numberOfSeasons ([Int!](scalars.md#int))
The total count of seasons for the given show.

##### year ([Int!](scalars.md#int))
The year when the show was released.

##### posters ([Poster!](interfaces.md#posters))
The show's poster in different formats.

##### genres ([String!](scalars.md#string))
The list of genres of the show

##### serviceProviders ([[ServiceProvider!](interfaces.md#service-providers)]!)
The show's poster in different formats.

##### creators ([[String!](scalars.md#string)])
The list of people who created the show

##### starring ([[String!](scalars.md#string)])
The list of people who acted in the show

##### directors ([[String!](scalars.md#string)])
The list of people who directed the show

## Episode
Represents an episode

### Fields

##### name ([String!](scalars.md#string))
The name of the episode in plain text.

##### description ([String](scalars.md#string))
The description of the episode in plain text.

##### _id ([ID!](scalars.md#id))

##### seasonNumber ([Int!](scalars.md#int))
The season number to which this episode belongs.

##### episodeNunber ([Int!](scalars.md#int))
The episode number of the given episode.

##### poster ([URI!](scalars.md#uri))
The episode's poster or its thumbnail.  

## Posters
Represents a poster object for a show

### Fields

##### vertical ([[String!](scalars.md#string)])
The list of vertically oriented photos.

##### horizontal ([[String!](scalars.md#string)])
The list of horizontally oriented photos.

##### background ([[String!](scalars.md#string)])
The list of photos as the background of the show.

## Service Provider
Represents a service provider object for a show

### Fields

##### name ([[String!](scalars.md#string)])
The name of the service provider in plain text

##### id ([[String!](scalars.md#string)])
The unique/entity id of a show used by the given service provider 