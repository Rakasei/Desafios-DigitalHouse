const router = require('express').Router();

const { home } = require('../../controllers/other');

router.get('/', home);

module.exports = router
