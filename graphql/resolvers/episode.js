const Episode = require('../../models/episode')
const { transformEpisode } = require('./merge')


module.exports = {
    episodes: async (args) => {
        try {
            args.orderBy = args.orderBy ? args.orderBy : { '_id': 1 }
            args.where = args.where ? args.where : {}
            const episodes = await Episode.find().where(args.where).skip(args.offset).sort(args.orderBy).limit(args.limit)
            return episodes.map(episode => {
                return transformEpisode(episode)
            })
        } catch (err) {
            throw err
        }
    }
}