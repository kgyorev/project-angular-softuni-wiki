const mongoose = require('mongoose');
const express = require('express');
const handlebars = require('express-handlebars')

const env = process.env.NODE_ENV || 'development'
console.log(env);
const settings = require('./server/config/settings')[env]





mongoose.Promise = global.Promise;
const app = express();

require('./server/config/database')(settings)
require('./server/config/express')(app)
require('./server/config/routes')(app)
require('./server/config/passport')()


app.listen(settings.port)

