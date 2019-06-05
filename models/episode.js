const mongoose = require('mongoose')

const episodeSchema = new mongoose.Schema({
    showId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Show'
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
}, {
    timestamps: true,
});
  
module.exports = mongoose.model('Episode', episodeSchema)