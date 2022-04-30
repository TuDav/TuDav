const express = require('express')
const router = express.Router()
const CartController = require('../../src/app/controller/CartController')

router.post('/submit', CartController.submit)
router.get('/success', CartController.success)

router.get('/', CartController.index)

module.exports = router