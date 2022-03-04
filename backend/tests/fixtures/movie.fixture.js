const mongoose = require('mongoose');
const faker = require('faker');
const { Movie } = require('../../src/models');

const movieOne = {
  _id: mongoose.Types.ObjectId(),
  name: faker.lorem.word(),
  description: faker.lorem.sentence(),
  rating: 5,
  genre: 'Science Fiction',
  releaseDate: faker.datatype.datetime(),
  cast: [
    {
      _id: mongoose.Types.ObjectId(),
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
    },
  ],
};

const movieTwo = {
  _id: mongoose.Types.ObjectId(),
  name: faker.lorem.word(),
  description: faker.lorem.sentence(),
  rating: 3,
  genre: 'Horror',
  releaseDate: faker.datatype.datetime(),
  cast: [
    {
      _id: mongoose.Types.ObjectId(),
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
    },
  ],
};

const insertMovies = async (movies) => {
  await Movie.insertMany(movies.map((movie) => ({ ...movie })));
};

module.exports = {
  movieOne,
  movieTwo,
  insertMovies,
};
