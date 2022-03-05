const Joi = require('joi');
const { objectId } = require('./custom.validation');
const { genres } = require('../models/movie.model');

const createMovie = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
    rating: Joi.number().required().valid(1, 2, 3, 4, 5),
    genre: Joi.string().valid(...genres),
    cast: Joi.array().items({ name: Joi.string(), lastName: Joi.string() }),
    releaseDate: Joi.date(),
    imageUrl: Joi.string(),
  }),
};

const getMovies = {
  query: Joi.object().keys({
    name: Joi.string(),
    genre: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getMovie = {
  params: Joi.object().keys({
    movieId: Joi.string().custom(objectId),
  }),
};

const updateMovie = {
  params: Joi.object().keys({
    movieId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      description: Joi.string(),
      rating: Joi.number().required().valid(1, 2, 3, 4, 5),
      genre: Joi.string().valid(...genres),
      cast: Joi.array().items({ name: Joi.string(), lastName: Joi.string() }),
      releaseDate: Joi.date(),
    })
    .min(1),
};

const deleteMovie = {
  params: Joi.object().keys({
    movieId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
