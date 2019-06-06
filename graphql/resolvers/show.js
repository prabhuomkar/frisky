const Show = require('../../models/show')
const { transformShow } = require('./merge')


module.exports = {
    shows: async (args) => {
        try {
            args.orderBy = args.orderBy ? args.OrderBy : { '_id': 1 }
            args.where = args.where ? args.where : {}
            let episodeArgs = {}
            episodeArgs.orderBy = args.orderBy.episodes ? args.orderBy.episodes : {}
            episodeArgs.where = args.where.episodes ? args.where.episodes : {}
            delete args.orderBy.episodes
            delete args.where.episodes
            const shows = await Show.find().limit(args.limit).skip(args.offset).sort(args.orderBy).where(args.where)
            return shows.map(show => {
                return transformShow(show, episodeArgs)
            })
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}