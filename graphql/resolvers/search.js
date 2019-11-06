const Show = require('../../models/show')
const { transformShow } = require('./merge')


module.exports = {
	search: async (args) => {
		try {
			args.orderBy = args.orderBy ? args.orderBy : { '_id': 1 }
			args.where = args.where ? args.where : {}
			if (args.where.serviceProviders) args.where.serviceProviders = JSON.parse('{ "$in": '+ JSON.stringify(args.where.serviceProviders) + '}')
			let episodeArgs = {}
			episodeArgs.orderBy = args.orderBy ? (args.orderBy.episodes ? args.orderBy.episodes : {}) : {}
			episodeArgs.where = args.where ? (args.where.episodes ? args.where.episodes : {}) : {}
			if (args.orderBy) delete args.orderBy.episodes
			if (args.where) delete args.where.episodes
			const shows = await Show.find({ $text: { $search: args.query } }).where(args.where).skip(args.offset).sort(args.orderBy).limit(args.limit)
			return shows.map(show => {
				return transformShow(show, episodeArgs)
			})
		} catch (err) {
			throw err
		}
	}
}