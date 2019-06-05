const Show = require('../../models/show')
const { transformShow } = require('./merge')


module.exports = {
    shows: async() => {
        try {
            const shows = await Show.find()
            return shows.map(show => {
                return transformShow(show)
            })
        } catch (err) {
            throw err
        }
    }
}