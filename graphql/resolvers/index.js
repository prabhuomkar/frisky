const showResolver = require('./show')
const episodeResolver = require('./episode')
const searchResolver = require('./search')

const rootResolver = {
	...showResolver,
	...episodeResolver,
	...searchResolver
}

module.exports = rootResolver
