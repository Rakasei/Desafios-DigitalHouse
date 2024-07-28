const router = require('express').Router();

const movieApiController = require('../../controllers/apis/movieApiController');

router.get('/', movieApiController.list);
router.get('/:id', movieApiController.detail);
router.get('/recomended/:rating', movieApiController.recomended);
router.post('/create', movieApiController.create);
router.get('/api/update/:id', movieApiController.update);
router.delete('/delete/:id', movieApiController.destroy)

module.exports = router;