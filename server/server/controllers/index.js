const homeController = require('./home-controller')
const usersController = require('./users-controller')
const articleController = require('./article-controller')
module.exports = {
  home: homeController,
  users: usersController,
  article:articleController
}