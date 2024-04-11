const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/create-movie', adminController.render);

router.post('/create-movie', adminController.create)

module.exports = router;