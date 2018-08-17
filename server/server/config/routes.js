const controllers = require('../controllers')
const auth = require('./auth')
const authCheck = require('../middleware/auth-check');

module.exports = (app) => {
    app.get('/', controllers.home.index)
    // app.get('/about', auth.isAuthenticated, controllers.home.about)

    app.get('/user/register', controllers.users.registerGet)
    app.post('/user/register', controllers.users.registerPost)
    app.get('/user/login', controllers.users.loginGet)
    app.post('/user/login', controllers.users.loginPost)
    app.get('/user/logout', controllers.users.logout)
    app.get('/user/details', authCheck ,controllers.users.userDetailsGet)


    app.get('/article/create', controllers.article.createGet);
    app.post('/article/create', authCheck, controllers.article.createPost);
    app.get('/edit/:id',authCheck, controllers.article.historyDetails);
    app.get('/article/details/:id', controllers.article.details);

    app.get('/article/edit/:id', controllers.article.editGet);
    app.post('/article/edit/:id',authCheck, controllers.article.editPost);
    app.get('/article/delete/:id',authCheck, controllers.article.deleteGet);

    app.get('/article/lock/:id',authCheck, controllers.article.lockGet);
    app.get('/article/unlock/:id',authCheck, controllers.article.unLockGet);

    app.get('/article/all', controllers.article.allGet);
    app.get('/article/search', controllers.article.searchGet);
    app.get('/article/history/:id',authCheck, controllers.article.history);


    app.all('*', (req, res) => {
        res.status(404)
        res.send('404 Not Found!')
        res.end()
    })
}
