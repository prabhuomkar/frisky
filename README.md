# frisky
Open Source GraphQL API for Online Shows

## Technical Stack/Framework Used

### Built With
 - [Cloud Atlas](https://www.mongodb.com/cloud/atlas) - Database Service Provider
 - [Heroku](https://heroku.com/) - Platform Service Provider

### Node.js Packages
 - [GraphQL](https://www.npmjs.com/package/graphql)
 - [Express](https://www.npmjs.com/package/express)
 - [Express GraphQL](https://www.npmjs.com/package/express-graphql)
 - [Mongoose](https://www.npmjs.com/package/mongoose)

## Usage

### Prequisites
- [Node.js](https://nodejs.org/) - Chrome's V8 Javascript Engine
- [MongoDB](https://mongodb.org/) - NoSQL Database

### Installation & Setup
- Install the packages mentioned in package.json file for getting all dependencies of the project.
```
npm install --save
```
- Getting the configuration ready  
Copy the ``.env.example`` file at the same location and save as ``.env``
```
cp .env.example .env
```
- Starting the application (after starting MongoDB's mongod)
```
npm start
```

#### Linting

- Linting the code
```
npm run lint
```
- Fixing the linting issues
```
npm run fix
```

#### Import Database

- Import shows from sample data
```
mongoimport -d <database_name> -c shows seeds/shows.json
```
- Import episodes from sample data
```
mongoimport -d <database_name> -c episodes seeds/episodes.json
```

## API Reference
Check out [docs](https://prabhuomkar.github.io/frisky) for more information!

## Contribute
Contributing Guide coming soon!

## Issues
Issues are managed via GitHub Issues.

## License
This project is licensed under the Apache License. See the [LICENSE](LICENSE) file for details.
