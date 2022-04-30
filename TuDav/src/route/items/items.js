const express = require('express')
const router = express.Router()
const ItemsController = require('../../app/controller/ItemsController')

router.get('/:id/addAndCart', ItemsController.addAndCart)
router.get('/:id/addAndContinue', ItemsController.addAndContinue)
router.get('/:id', ItemsController.show)
router.put('/:id', ItemsController.update)
router.get('/edit/:id', ItemsController.edit)
router.get('/', ItemsController.index)

module.exports = router