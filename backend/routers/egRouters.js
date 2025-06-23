const express = require("express");
const router = express.Router();
const { getRoute } = require('../controllers/egcontrollers')
const { postRoute } = require('../controllers/egcontrollers')
const { putRoute } = require('../controllers/egcontrollers')
const { deleteRoute } = require('../controllers/egcontrollers')
router.get('/get', getRoute)
router.post('/post', postRoute)
router.put('/put/:id', putRoute)
router.delete('/delete/:id', deleteRoute)

module.exports = router