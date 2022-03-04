const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const castSchema = mongoose.Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  rating: {
    type: Number,
    validate(value) {
      if (value < 0 || value > 5) {
        throw new Error('Rating should be greater than 0 and less than 6');
      }
    },
  },
  genre: {
    type: String,
  },
  cast: [castSchema],
  releaseDate: {
    type: Date,
  },
});

// add plugin that converts mongoose to json
movieSchema.plugin(toJSON);
movieSchema.plugin(paginate);

/**
 * @typedef Movie
 */
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
