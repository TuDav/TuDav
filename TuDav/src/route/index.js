
const ItemRouter = require('./items/items')
const SiteRouter =  require('./site')
const MeRouter =  require('./me/me')
const CartRouter =  require('./cart')
const OwnerRouter =  require('./owner')

Route = function(app)  {
    app.use('/cart', CartRouter)
    app.use('/items', ItemRouter) 
    app.use('/me', MeRouter) 
    app.use('/owner', OwnerRouter) 
    app.use('/', SiteRouter);

    
}

module.exports =  Route