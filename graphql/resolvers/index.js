const showResolver = require('./show')
const episodeResolver = require('./episode')


const rootResolver = {
	...showResolver,
	...episodeResolver
}

module.exports = rootResolver
