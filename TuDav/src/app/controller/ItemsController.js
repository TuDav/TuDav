
const Item = require('../model/Items')
class ItemsController {
  index(req, res, next) {
    
    let perPage = 9; // số lượng sản phẩm xuất hiện trên 1 page
    let page = req.query.q || 1;
    let slug = req.query
    let title = slug.name === 'trueName`' ? 'Tên:' : 'Giá'
    let type = slug.type === 'asc' ? 'tăng dần' : 'giảm dần'
    if (slug.name === undefined && slug.type === undefined) {
      title = 'Sắp xếp'
      type = ''
    }
    if (slug.name === 'trueName') {
      title = 'Tên'
      type = slug.type === 'asc' ? 'A - Z' : 'Z - A'
    }
    let countHandle;
    let itemContainer
    if (req.query.category){
      itemContainer = Item.find({type: req.query.category});
      Item.count({type: req.query.category}, function(err, doc){
        countHandle = doc
      })
    }else{
      itemContainer = Item.find({})
      Item.count({}, function(err, doc){
        countHandle = doc
      })
    }
    if (req.query.hasOwnProperty('_sort')) {
      itemContainer = itemContainer.sort({
        [req.query.name]: req.query.type
      })
    }
    itemContainer
      .lean() //toObject()
      .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
      .limit(perPage)
      .exec((err, items) => {
        // đếm để tính có bao nhiêu trang
          if (err) return next(err);
          res.render('items/index', {
            items,
            countHandle,
            page,
            slug,
            title,
            type,
            perPage,
          }) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
      
      });
    
  }
  edit(req, res, next) {
    Item
      .findById(req.params.id)
      .lean()
      .exec(function (err, items) {
        res.render('items/edit', {
          items
        })
      })
  }
  update(req, res, next) {
    Item.updateOne({ _id: req.params.id }, req.body, function (err, doc) {
      if (err) {
        console.log(err)
      }
      else {
        res.redirect('/items?display=grid')
      }
    })

  }
  show(req, res, next){
    Item
    .findById(req.params.id)
    .lean()
    .exec(function(err,item){
      Item
      .find({type: item.type})
      .lean()
      .exec(function(err,items){
        res.render('items/show', {
          item,
          items
        })
      })
    })
  }
  addAndCart(req, res, next){
    res.cookie(req.params.id, `${req.query.quantiny}`)
    res.redirect('/cart')
  }
  addAndContinue(req, res, next){
    res.cookie(req.params.id, req.query.quantiny)
    res.redirect('/items')
  }
}



module.exports = new ItemsController