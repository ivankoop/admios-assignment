const Joi = require('joi');

const createMovie = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
    rating: Joi.number().required().valid(1, 2, 3, 4, 5),
    genre: Joi.string(),
    cast: Joi.array().items({ name: Joi.string(), lastName: Joi.string() }),
    releaseDate: Joi.date(),
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

module.exports = {
  getMovies,
  createMovie,
};
