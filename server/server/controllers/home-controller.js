// module.exports = {
//     index: (req, res) => {
//       res.render('home/index') // do not forget to move the view file
//     },
//     about: (req, res) => { res.render('home/about') }
//   }


const mongoose = require('mongoose');
const Article = mongoose.model('Article');
const Edit = mongoose.model('Edit');

module.exports = {
    index: (req, res) => {
        Article.find({deletedStatus:false}, {}, {sort: {'creationDate': -1}}).limit(3).populate('author').then(articles => {
            Article.findOne({deletedStatus:false}, {}, {sort: {'creationDate': -1}}, function (err, post) {
                console.log(post);
            }).populate('lastEdit').then(article => {
                let displayContent = '';
                let lastEdit=null;
                if (article) {
                    displayContent = article.lastEdit.content.split(/\s+/).slice(0, 50).join(" ")
                    if(article.lastEdit.content.split(/\s+/).length>50){
                        displayContent=displayContent+'...'
                    }
                    lastEdit=article.lastEdit
                }
                return res.status(200).json({
                    success: true,
                    articles: articles,
                    edit:lastEdit,
                    article:article,
                    displayContent: displayContent
                })
               // res.render('home/index', {articles: articles, edit:lastEdit,article:article, displayContent: displayContent});
            });

            // res.render('home/index');
        })
    }
};