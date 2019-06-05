const Episode = require('../../models/episode')
const { transformEpisode } = require('./merge')


module.exports = {
    episodes: async() => {
        try {
            const episodes = await Episode.find()
            return episodes.map(episode => {
                return transformEpisode(episode)
            })
        } catch (err) {
            throw err
        }
    }
}