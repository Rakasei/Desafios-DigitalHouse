const router = require('express').Router();

const { favoritas } = require('../../controllers/other');

router.get('/', favoritas);
module.exports = router