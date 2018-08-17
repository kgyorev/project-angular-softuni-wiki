const Article = require('mongoose').model('Article');
const Edit = require('mongoose').model('Edit');
const authCheck = require('../middleware/auth-check');

module.exports = {
    createGet: (req, res) => {
        if (!req.isAuthenticated()) {
            let returnUrl = '/article/create';
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }

        res.render('article/create');
    },

    createPost: (req, res) => {
        // if (!req.isAuthenticated()) {
        //     let returnUrl = '/article/create';
        //     req.session.returnUrl = returnUrl;
        //
        //     res.redirect('/user/login');
        //     return;
        // }
        // authCheck(req,res,next);
        let articleArgs = req.body;

        let errorMsg = '';
        if (!articleArgs.title) {
            errorMsg = 'Invalid title!';
        } else if (!articleArgs.content) {
            errorMsg = 'Invalid content!';
        }

        if (errorMsg) {
            res.render('article/create', {error: errorMsg});
            return;
        }

        articleArgs.author = req.user.id;


        Article.create(articleArgs).then(article => {
            req.user.articles.push(article.id);
            req.user.save(err => {
                if (err) {
                    res.redirect('/', {error: err.message});
                } else {
                    articleArgs.article = article.id
                    Edit.create(articleArgs).then(edit => {
                        Article.update({_id: article.id}, {$set: {lastEdit: edit.id, editLs: [edit]}})
                            .then(updateStatus => {
                             //   res.redirect('/');
                                return res.status(200).json({
                                    success: true
                                })
                            })
                    })

                }
            });
        })
    },

    details: (req, res) => {
        let id = req.params.id;

        Article.findById(id).populate('lastEdit').then(article => {
            if (!req.user) {
                //  res.render('article/details', {article: article, isUserAuthorized: false});
                return res.status(200).json({
                    success: true,
                    article: article,
                    isUserAuthorized: false
                })
            }

            req.user.isInRole('Admin').then(isAdmin => {
                // let isUserAuthorized = isAdmin || req.user.isAuthor(article);
                let isUserAuthorized = isAdmin || req.user;

                // res.render('article/details', {article: article, isUserAuthorized: isUserAuthorized});
                return res.status(200).json({
                    success: true,
                    article: article,
                    isUserAuthorized: isUserAuthorized
                })

            });
        });
    },

    historyDetails: (req, res) => {
        let id = req.params.id;

        Edit.findById(id).populate('article').then(edit => {
            if (req.user) {
                //  res.render('article/details', {article: article, isUserAuthorized: false});
                return res.status(200).json({
                    success: true,
                    article: edit.article,
                    edit: edit,
                    isUserAuthorized: false
                })
            }
            return res.status(401).json({
                success: false,
                article: {},
                edit: {},
                isUserAuthorized: false
            })

            // req.user.isInRole('Admin').then(isAdmin => {
            //     // let isUserAuthorized = isAdmin || req.user.isAuthor(article);
            //     let isUserAuthorized = isAdmin || req.user;
            //
            //     // res.render('article/details', {article: article, isUserAuthorized: isUserAuthorized});
            //     return res.status(200).json({
            //         success: true,
            //         article: article,
            //         isUserAuthorized: isUserAuthorized
            //     })
            //
            // });
        });
    },

    editGet: (req, res) => {
        let id = req.params.id;

        if (!req.isAuthenticated()) {
            let returnUrl = `/article/edit/${id}`;
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }

        Article.findById(id).populate('lastEdit').then(article => {
            if (!req.user) {
                res.redirect('/');
                return;
            }

            req.user.isInRole('Admin').then(isAdmin => {
                // let isUserAuthorized = isAdmin || req.user.isAuthor(article);
                let isUserAuthorized = isAdmin;
                res.render('article/edit', {article: article, isUserAuthorized: isUserAuthorized});
            });
        });
    },

    editPost: (req, res) => {
        let id = req.params.id;

        // if (!req.isAuthenticated()) {
        //     let returnUrl = `/article/edit/${id}`;
        //     req.session.returnUrl = returnUrl;
        //
        //     res.redirect('/user/login');
        //     return;
        // }

        let articleArgs = req.body;
        delete articleArgs._id;

        let errorMsg = '';
        // if (!articleArgs.title){
        //     errorMsg = 'Article title cannot be empty!';
        // } else if (!articleArgs.content) {
        //     errorMsg = 'Article content cannot be empty!'
        // }

        if (errorMsg) {
            res.render('article/edit', {error: errorMsg})
        } else {
            articleArgs.author = req.user.id;
            articleArgs.article = id;
            Article.findById(id).then(article => {
                if (!req.user) {
                    res.redirect('/');
                    return;
                }
                Edit.create(articleArgs).then(edit => {
                    let editLs = article.editLs
                    editLs.push(edit.id)
                    Article.update({_id: id}, {$set: {lastEdit: edit.id, editLs: editLs}})
                        .then(updateStatus => {
                            return res.status(200).json({
                                success: true
                            })
                            // res.redirect(`/article/details/${id}`);
                        })
                })
            })

        }
    },

    deleteGet: (req, res) => {
        let id = req.params.id;
        let articleArgs = req.body;
        let errorMsg = '';
        if (errorMsg) {
            res.render('article/edit', {error: errorMsg})
        } else {
            Article.findById(id).then(article => {
                if (!req.user) {
                    res.redirect('/');
                    return;
                }
                Article.update({_id: id}, {$set: {deletedStatus: true}})
                    .then(updateStatus => {
                        return res.status(200).json({
                            success: true,
                            article: article
                        })
                    })
            })

        }
    },

    // deleteGet: (req, res) => {
    //     let id = req.params.id;
    //
    //     if (!req.isAuthenticated()) {
    //         let returnUrl = `/article/delete/${id}`;
    //         req.session.returnUrl = returnUrl;
    //
    //         res.redirect('/user/login');
    //         return;
    //     }
    //
    //     Article.findById(id).then(article => {
    //         req.user.isInRole('Admin').then(isAdmin => {
    //             if (!isAdmin && !req.user.isAuthor(article)) {
    //                 res.redirect('/');
    //                 return;
    //             }
    //
    //             res.render('article/delete', article)
    //         });
    //     });
    // },


    lockGet: (req, res) => {
        let id = req.params.id;

        if (!req.isAuthenticated()) {
            let returnUrl = `/article/lock/${id}`;
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }
        Article.findById(id).then(article => {
            if (!req.user) {
                res.redirect('/');
                return;
            }
            Article.update({_id: id}, {$set: {lockedStatus: true}})
                .then(updateStatus => {
                  //  res.redirect(`/article/edit/${id}`);
                    return res.status(200).json({
                        success: true
                    })
                })
        })
    },
    unLockGet: (req, res) => {
        let id = req.params.id;

        if (!req.isAuthenticated()) {
            let returnUrl = `/article/unlock/${id}`;
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }
        Article.findById(id).then(article => {
            if (!req.user) {
                res.redirect('/');
                return;
            }
            Article.update({_id: id}, {$set: {lockedStatus: false}})
                .then(updateStatus => {
                   // res.redirect(`/article/edit/${id}`);
                    return res.status(200).json({
                        success: true
                    })
                })
        })
    },


    // searchGet: (req, res) => {
    //     //let searchArgs = req.body;
    //     const searchStr = req.query.searchStr || '';
    //     // console.log("Body=", req.body);
    //     //    let searchStr =searchArgs.searchStr;
    //     Article.find({
    //         deletedStatus: false, title: {
    //             $regex: new RegExp(searchStr, "ig")
    //         }
    //     }, function (err, post) {
    //         console.log(post);
    //     }).then(articles => {
    //         // res.render('article/all-articles', {articles: articles});
    //         return res.status(200).json({
    //             success: true,
    //             articles: articles
    //         })
    //     });
    // },

    searchGet: (req, res) => {
        //let searchArgs = req.body;
        const searchStr = req.query.searchStr || '';
        const pageSize = 10
        const page = parseInt(req.query.page) || 1;


        let totalCount = 0;
        Article.find({
            deletedStatus: false, title: {
                $regex: new RegExp(searchStr, "ig")
            }
        }, {}, {sort: {'title': 1}}, function (err, post) {
            console.log(post);
            // totalCount = post.length
        })
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .exec(function (err, articles) {
                Article.find({deletedStatus: false,title: {
                    $regex: new RegExp(searchStr, "ig")
                }}, (function (err, totalCount) {
                    // .then(articles => {
                    // res.render('article/all-articles', {articles: articles});
                    let totalArticles = totalCount.length
                    return res.status(200).json({
                        success: true,
                        totalCount: totalArticles,
                        articles: articles
                    })
                    // }
                    // )
                }))
            });
    },

    allGet: (req, res) => {
        const pageSize = 10
        const page = parseInt(req.query.page) || 1
        let startIndex = (page - 1) * pageSize
        let endIndex = startIndex + pageSize
        let totalCount = 0;

        Article.find({deletedStatus: false}, {}, {sort: {'title': 1}}, function (err, post) {
            console.log(post);
            // totalCount = post.length
        })
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .exec(function (err, articles) {
                Article.find({deletedStatus: false}, (function (err, totalCount) {
                    // .then(articles => {
                    // res.render('article/all-articles', {articles: articles});
                    let totalArticles = totalCount.length
                    return res.status(200).json({
                        success: true,
                        totalCount: totalArticles,
                        articles: articles
                    })
                    // }
                    // )
                }))
            });
    },
    history: (req, res) => {
        let id = req.params.id;

        if (!req.user) {
            let returnUrl = `/article/history/${id}`;
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }

        Article.findById(id).then(article => {
            let editLs = article.editLs
            Edit.find({'_id': {$in: editLs}}).populate('author').then(editHistory => {
                    return res.status(200).json({
                        success: true,
                        editLs: editHistory,
                        article: article
                    })
                    //   res.render('article/history', {article: article, editLs: editHistory})
                }
            )
        })
    }
};