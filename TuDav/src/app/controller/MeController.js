
const Item = require('../model/Items')
class ItemsController {

    add(req, res, next) {
        res.render('me/addNewProduct')
    }
    store(req, res, next) {
      function removeAccents(str) {
        return str.normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/đ/g, 'd').replace(/Đ/g, 'D');
      }
      req.body.trueName = removeAccents(req.body.name)
      const item = new Item(req.body);
      item.save()
      res.redirect('/me/addNewProduct')
    }
  
    
}

module.exports = new ItemsController