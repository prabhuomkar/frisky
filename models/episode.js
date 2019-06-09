const mongoose = require('mongoose')

const episodeSchema = new mongoose.Schema({
	showId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Show',
		required: true,
		index: true
	},
	name: {
		type: String,
		required: true,
		text: true
	},
	description: {
		type: String,
		required: true,
		text: true
	},
	seasonNumber: {
		type: Number,
		required: true
	},
	episodeNumber: {
		type: Number,
		required: true
	},
	poster: {
		type: String,
		required: true
	}
})

episodeSchema.index({ showId: 1 })
  
module.exports = mongoose.model('Episode', episodeSchema)