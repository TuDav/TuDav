const Item = require('../model/Items')
const BillInfo = require('../model/BillInfo');


class OwnerController {
    index(req, res, next) {
        BillInfo
        .find({})
        .lean()
        .exec(function (err,bill){
            res.render('owner', {bill})
        })
    }
 
}

module.exports = new OwnerController