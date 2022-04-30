const express = require('express')
const router = express.Router()
const MeController = require('../../app/controller/MeController')


router.get('/addNewProduct', MeController.add)
router.post('/store', MeController.store)

module.exports = router