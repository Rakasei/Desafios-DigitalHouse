const express = require('express');
const router = express.Router();
const apiGenresController = require('../../controllers/api/genresController');


router.get("/genres", apiGenresController.apiList);
router.get("/genres/:id", apiGenresController.apiDetail);


module.exports = router;