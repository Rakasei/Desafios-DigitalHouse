const router = require('express').Router();

const { formulario } = require('../../controllers/other');

router.get('/', formulario);

module.exports = router