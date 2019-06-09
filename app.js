const express = require('express')
const graphqlHttp = require('express-graphql')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const helmet = require('helmet')
const dotenv = require('dotenv')
const chalk = require('chalk')
const winston = require('winston')
const expressWinston = require('express-winston')

const graphQlSchema = require('./graphql/schema/index')
const graphQlResolvers = require('./graphql/resolvers/index')

console.log(chalk.yellow('Starting Frisky Server...'))
/**
 * Express App
 */
const app = express()
let port = process.env.PORT || 3000

/**
 * Environment Variables
 */
dotenv.config()

/**
 * Middlewares
 */
console.log(chalk.blue('Initializing Middlewares...'))
app.use(helmet())
app.set('x-powered-by', 'Frisky Server')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressWinston.logger({
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'logs/'+new Date().toISOString().substring(0, 10)+'.log' })
	],
	format: winston.format.combine(
		winston.format.json()
	)
}))

/**
 * MongoDB Connection
 */
console.log(chalk.blue('Initializing Database Connection...'))
let options = {
	autoIndex: false,
	reconnectTries: Number.MAX_VALUE,
	reconnectInterval: 500,
	useNewUrlParser: true,
}
let dbUri = process.env.NODE_ENV === 'production' ? process.env.MONGO_URI : process.env.MONGO_URI_DEV
mongoose
	.connect(dbUri, options)
	.then(() => {
		/**
         * GraphQL Server
         */
		app.use(
			'/graphql',
			graphqlHttp({
				schema: graphQlSchema,
				rootValue: graphQlResolvers,
				graphiql: true
			})
		).listen(port, () => {
			console.log(chalk.yellow(`✔︎ Frisky GraphQL Server started on port ${port}`))
		})
	})
	.catch((err) => {
		console.log(err)
		console.log(chalk.red('Shutting down Frisky Server'))
	})

/**
 * Database Connection Events
 */
const connection = mongoose.connection
connection.on('connected', () => {
	console.log(chalk.green(`✔︎ Connected to Database: ${dbUri}`))
})
connection.on('error', (err) => {
	console.log(chalk.red(`✘ Database Error: ${err}`))
})
connection.on('disconnected', () => {
	console.log(chalk.red('✘ Disconnected from Database'))
})
connection.on('reconnected', () => {
	console.log(chalk.green(`✔︎ Reconnected to Database: ${dbUri}`))
})