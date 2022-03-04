const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { movieOne, movieTwo, insertMovies } = require('../fixtures/movie.fixture');

setupTestDB();

describe('Movie routes', () => {
  describe('GET /v1/movies', () => {
    test('should return 200 and apply the default query options', async () => {
      await insertMovies([movieOne, movieTwo]);

      const res = await request(app).get('/v1/movies').send().expect(httpStatus.OK);

      expect(res.body).toEqual({
        results: expect.any(Array),
        page: 1,
        limit: 10,
        totalPages: 1,
        totalResults: 2,
      });
      expect(res.body.results).toHaveLength(2);
      expect(res.body.results[0].id).toEqual(movieOne._id.toHexString());
      expect(res.body.results[0].name).toEqual(movieOne.name);
      expect(res.body.results[0].description).toEqual(movieOne.description);
      expect(res.body.results[0].genre).toEqual(movieOne.genre);
      expect(res.body.results[0].rating).toEqual(movieOne.rating);
      expect(new Date(res.body.results[0].releaseDate).toString()).toEqual(movieOne.releaseDate.toString());
    });

    test('should correctly apply filter on name field', async () => {
      await insertMovies([movieOne, movieTwo]);

      const res = await request(app).get('/v1/movies').query({ name: movieOne.name }).send().expect(httpStatus.OK);

      expect(res.body).toEqual({
        results: expect.any(Array),
        page: 1,
        limit: 10,
        totalPages: 1,
        totalResults: 1,
      });
      expect(res.body.results).toHaveLength(1);
      expect(res.body.results[0].id).toBe(movieOne._id.toHexString());
    });

    test('should correctly apply filter on genre field', async () => {
      await insertMovies([movieOne, movieTwo]);

      const res = await request(app).get('/v1/movies').query({ genre: 'Horror' }).send().expect(httpStatus.OK);

      expect(res.body).toEqual({
        results: expect.any(Array),
        page: 1,
        limit: 10,
        totalPages: 1,
        totalResults: 1,
      });
      expect(res.body.results).toHaveLength(1);
      expect(res.body.results[0].id).toBe(movieTwo._id.toHexString());
    });

    test('should correctly sort the returned array if descending sort param is specified', async () => {
      await insertMovies([movieOne, movieTwo]);

      const res = await request(app).get('/v1/movies').query({ sortBy: 'genre:desc' }).send().expect(httpStatus.OK);

      expect(res.body).toEqual({
        results: expect.any(Array),
        page: 1,
        limit: 10,
        totalPages: 1,
        totalResults: 2,
      });
      expect(res.body.results).toHaveLength(2);
      expect(res.body.results[0].id).toBe(movieOne._id.toHexString());
      expect(res.body.results[1].id).toBe(movieTwo._id.toHexString());
    });

    test('should correctly sort the returned array if ascending sort param is specified', async () => {
      await insertMovies([movieOne, movieTwo]);

      const res = await request(app).get('/v1/movies').query({ sortBy: 'genre:asc' }).send().expect(httpStatus.OK);

      expect(res.body).toEqual({
        results: expect.any(Array),
        page: 1,
        limit: 10,
        totalPages: 1,
        totalResults: 2,
      });
      expect(res.body.results).toHaveLength(2);
      expect(res.body.results[0].id).toBe(movieTwo._id.toHexString());
      expect(res.body.results[1].id).toBe(movieOne._id.toHexString());
    });

    test('should correctly sort the returned array if multiple sorting criteria are specified', async () => {
      await insertMovies([movieOne, movieTwo]);

      const res = await request(app)
        .get('/v1/movies')
        .query({ sortBy: 'genre:desc,rating:asc' })
        .send()
        .expect(httpStatus.OK);

      expect(res.body).toEqual({
        results: expect.any(Array),
        page: 1,
        limit: 10,
        totalPages: 1,
        totalResults: 2,
      });
      expect(res.body.results).toHaveLength(2);

      const expectedOrder = [movieOne, movieTwo].sort((a, b) => {
        if (a.genre < b.genre) {
          return 1;
        }
        if (a.genre > b.genre) {
          return -1;
        }
        return a.rating < b.rating ? -1 : 1;
      });

      expectedOrder.forEach((movie, index) => {
        expect(res.body.results[index].id).toBe(movie._id.toHexString());
      });
    });

    test('should return the correct page if page and limit params are specified', async () => {
      await insertMovies([movieOne, movieTwo]);

      const res = await request(app).get('/v1/movies').query({ page: 1, limit: 2 }).send().expect(httpStatus.OK);

      expect(res.body).toEqual({
        results: expect.any(Array),
        page: 1,
        limit: 2,
        totalPages: 1,
        totalResults: 2,
      });
      expect(res.body.results).toHaveLength(2);
      expect(res.body.results[0].id).toBe(movieOne._id.toHexString());
    });
  });
});
