const path = require('path')
let rootPath = path.normalize(path.join(__dirname, '/../../'))
let port = process.env.PORT || 1337
console.log(port);
module.exports = {development: {rootPath: rootPath,
    //db: 'mongodb://localhost:27017/softuni-wiki',
    db: 'mongodb+srv://root:root@cluster0.us3sy.mongodb.net/db1',
    //db: 'mongodb://admin:apolo13A@ds131601.mlab.com:31601/softuni-wiki',
    port: port,

  },
  production: {
      //db: 'mongodb://admin:apolo13A@ds131601.mlab.com:31601/softuni-wiki',
      db: 'mongodb+srv://root:root@cluster0.us3sy.mongodb.net/db1',
      port: port,
  }
}
// index.js
// const env = process.env.NODE_ENV || 'development'
// const settings = require('./server/config/settings')[env]
