const mongoose = require('mongoose')

const showSchema = new mongoose.Schema({
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
    year: {
        type: Number,
        required: true
    },
    numberOfSeasons: {
        type: Number,
        required: true
    },
    creators: [{
      type: String
    }],
    starring: [{
        type: String
    }],
    directors: [{
        type: String
    }],
    genres: [{
        type: String
    }],
    posters: {
        horizontal: [{
            type: String
        }],
        vertical: [{
            type: String
        }],
        background: [{
            type: String
        }]
    },
    serviceProviders: [{
        name: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    }],
}, {
    timestamps: true,
});
  
module.exports = mongoose.model('Show', showSchema)