const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsController');

router.get("/actors", actorsController.list);
router.get("/actors/detail/:id", actorsController.detail);
router.get("/actors/add", actorsController.add)
router.post("/actors/add", actorsController.create)

router.get("/actors/delete/:id", actorsController.delete)
router.post("/actors/delete/:id", actorsController.destroy)


module.exports = router;