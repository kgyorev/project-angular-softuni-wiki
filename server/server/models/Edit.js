const mongoose = require('mongoose');

let editSchema = mongoose.Schema({
    content: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    article: {type: mongoose.Schema.Types.ObjectId,required: true, ref: 'Article'},
    creationDate: {type: Date, default: Date.now}
});

const Edit = mongoose.model('Edit', editSchema);

module.exports = Edit;

// Problem 2.	Create Article (20 points)
// For authenticated users
// An article must have a title, a locked status and a list of edits. Each edit has an author, a creation date, content, and an associated article.
//     Upon creation of the article, its title is stored, the locked status is set to false and the contents, which the user has entered, are stored in an edit,
//     associated with that article. The user becomes the author for the edit and the creation date is set to the current time.
//
