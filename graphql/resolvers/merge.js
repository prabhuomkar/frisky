const Show = require('../../models/show')
const Episode = require('../../models/episode')


const episodes = async (showId, args) => {
    try {
        args.orderBy = args.orderBy !== undefined ? args.OrderBy : { '_id': 1 }
        args.where = args.where !== undefined ? args.where : { }
        const episodes = await Episode.find({ showId: showId }).limit(args.limit).skip(args.offset).where(args.where).sort(args.orderBy)
        return episodes.map(episode => {
            return transformEpisode(episode)
        })
    } catch (err) {
        throw err
    }
}
  
const transformEpisode = async episode => {
    return {
        ...episode._doc,
        _id: episode.id
    }
}

const transformShow = async (show, args) => {
    return {
        ...show._doc,
        _id: show.id,
        episodes: episodes.bind(this, show._id, args)
    }
}

module.exports = { transformEpisode, transformShow }