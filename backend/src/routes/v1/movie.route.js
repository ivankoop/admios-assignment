const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const movieValidation = require('../../validations/movie.validation');
const movieController = require('../../controllers/movie.controller');

const router = express.Router();

router.get('/', validate(movieValidation.getMovies), movieController.getMovies);
router.post('/', auth('manageMovies'), validate(movieValidation.createMovie), movieController.createMovie);

router.get('/:movieId', validate(movieValidation.getMovie), movieController.getMovie);

router
  .route('/:movieId')
  .patch(auth('manageMovies'), validate(movieValidation.updateMovie), movieController.updateMovie)
  .delete(auth('manageMovies'), validate(movieValidation.deleteMovie), movieController.deleteMovie);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Movies retrieval
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get all movies
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Movie name
 *       - in: query
 *         name: genre
 *         schema:
 *           type: string
 *         description: Movie genre
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of movies
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Movie'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 */
