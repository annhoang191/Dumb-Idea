const mongoose = require('mongoose');

let ideaSchema = mongoose.Schema({
    name: String,
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    photo: { data: Buffer, contentType: String },
    category: String,
    tags: [],
    briefDescription: String,
    description: String, //this can be a HTML
    estimatedRating: Number, //owner's rating
    rating: Number,
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    status: String, // private or public ?
    dateCreated: Date
});

module.exports = mongoose.model('Idea', ideaSchema);
