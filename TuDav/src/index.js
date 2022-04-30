const express = require('express')
const {engine} = require('express-handlebars')
const path = require('path')
const Route = require('./route/index')
const app = express()
const sass = require('node-sass');
const port = 3000
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')




const db = require('./config/db')
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
// Connect DB
db.connect()

app.use(cookieParser())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))











// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))











app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resourse', 'views'));


Route(app)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})