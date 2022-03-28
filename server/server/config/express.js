const express = require('express')
const cors = require('cors')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')

module.exports = (app) => {

  // View engine setup.
  app.engine('.hbs', handlebars({extname: '.hbs', defaultLayout: 'main'}))
  app.set('view engine', '.hbs')

  // We will use cookies.
  app.use(cookieParser())

  // This set up which is the parser for the request's data.
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())


  // Session is storage for cookies, which will be de/encrypted with that 'secret' key.
  app.use(session({
    secret: 'neshto-taino!@#$%',
    resave: false, saveUninitialized: false
  }))

  // For user validation we will use passport module.
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(cors())

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested, Content-Type, Accept Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "POST, PUT, PATCH, GET, DELETE"
      );
      return res.status(200).json({})
    }
    next()
  });

  app.use((req, res, next) => {
    if (req.user) {
      res.locals.user = req.user;

      res.locals.user.isInRole('Admin').then(isAdmin => {
        res.locals.isAdmin = isAdmin;
      })
    }
    next();
  });

  // This makes the content in the "public" folder accessible for every user.
  app.use(express.static('public'))
  console.log('Express ready!')
}
// index.js
//require('./server/config/express')(app)
