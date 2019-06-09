const Show = require('../../models/show')
const { transformShow } = require('./merge')


module.exports = {
	shows: async (args) => {
		try {
			args.orderBy = args.orderBy ? args.orderBy : { '_id': 1 }
			args.where = args.where ? args.where : {}
			let episodeArgs = {}
			episodeArgs.orderBy = args.orderBy ? (args.orderBy.episodes ? args.orderBy.episodes : {}) : {}
			episodeArgs.where = args.where ? (args.where.episodes ? args.where.episodes : {}) : {}
			if (args.orderBy) delete args.orderBy.episodes
			if (args.where) delete args.where.episodes
			const shows = await Show.find().where(args.where).sort(args.orderBy).limit(args.limit).skip(args.offset)
			return shows.map(show => {
				return transformShow(show, episodeArgs)
			})
		} catch (err) {
			console.log(err)
			throw err
		}
	}
}