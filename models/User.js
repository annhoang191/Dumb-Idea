const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: String,
    address: String,
    password: String, //TODO encode password
    email: String,
    createdIdeas: [{type: mongoose.Schema.Types.ObjectId, ref: 'Idea'}],
    followedIdeas: [{type: mongoose.Schema.Types.ObjectId, ref: 'Idea'}]
});

module.exports = mongoose.model('User', userSchema);
