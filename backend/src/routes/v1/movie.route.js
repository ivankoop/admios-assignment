const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const movieValidation = require('../../validations/movie.validation');
const movieController = require('../../controllers/movie.controller');

const router = express.Router();

router.get('/', validate(movieValidation.getMovies), movieController.getMovies);
router.post('/', validate(movieValidation.createMovie), movieController.createMovie);

module.exports = router;
