const mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    content: String
});

module.exports = mongoose.model('Comment', commentSchema);
