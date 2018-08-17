const mongoose = require('mongoose');
// const Edit = require('mongoose').model('Edit');

let articleSchema = mongoose.Schema({
    title: {type: String, required: true},
    lockedStatus: {type: Boolean, required: true , default:false},
    deletedStatus: {type: Boolean, required: true , default:false},
    creationDate: {type: Date, default: Date.now},
    lastEdit: {type: mongoose.Schema.Types.ObjectId, ref: 'Edit'},
    editLs: {type: [mongoose.Schema.Types.ObjectId], ref: 'Edit',default:[]}
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;

// Problem 2.	Create Article (20 points)
// For authenticated users
// An article must have a title, a locked status and a list of edits. Each edit has an author, a creation date, content, and an associated article.
//     Upon creation of the article, its title is stored, the locked status is set to false and the contents, which the user has entered, are stored in an edit,
//     associated with that article. The user becomes the author for the edit and the creation date is set to the current time.
//
