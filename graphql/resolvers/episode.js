const Episode = require('../../models/episode')
const { transformEpisode } = require('./merge')


module.exports = {
    episodes: async (args) => {
        try {
            args.orderBy = args.orderBy ? args.OrderBy : { '_id': 1 }
            args.where = args.where ? args.where : {}
            const episodes = await Episode.find().limit(args.limit).skip(args.offset).sort(args.orderBy).where(args.where)
            return episodes.map(episode => {
                return transformEpisode(episode)
            })
        } catch (err) {
            throw err
        }
    }
}