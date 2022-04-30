
const { find } = require('../model/Items')
const Item = require('../model/Items')
const BillInfo = require('../model/BillInfo')
class CartController {

  index(req, res, next) {
      var ids = []
      var quanity = []
       JSON.stringify(req.cookies).split(',').forEach((item, index) => {
        if (index ===  0){
        ids.push(item.slice(2, item.indexOf(':') - 1)) 
        }
        else{
        ids.push(item.slice(1, item.indexOf(':') - 1))
      }
        if (index === JSON.stringify(req.cookies).split(',').length - 1){
          quanity.push(item.slice(item.indexOf(':') + 2, -2))
        }
        else{
          quanity.push(item.slice(item.indexOf(':') + 2, -1))
        }
      })
      Item
      .find({_id: {$in: ids}})
      .lean()
      .exec(function(err, items) {
        res.render('cart/cart', {
          items
        });
      })
  
    
}

 submit(req, res, next) {
    const billInfo = new BillInfo(req.body)
    billInfo.save()
    res.redirect('success')
}
success(req, res, next){
  res.render('cart/submitSuccess')
}
 }




module.exports = new CartController