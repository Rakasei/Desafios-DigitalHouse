const express = require('express');
const router = express.Router();
const apiMoviesController = require('../../controllers/api/moviesController.js');


router.delete('/movies/delete/:id', apiMoviesController.destroy);
router.post('/movies/create', apiMoviesController.create);


module.exports = router;