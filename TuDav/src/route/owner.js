const express = require('express')
const router = express.Router()
const OwnerController = require('../../src/app/controller/OwnerController')


router.get('/', OwnerController.index)

module.exports = router