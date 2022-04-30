const express = require('express')
const router = express.Router()
const SiteController = require('../app/controller/SiteController')

router.get('/introduce', SiteController.intro)
router.get('/', SiteController.home)

module.exports = router