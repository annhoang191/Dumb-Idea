const mongoose = require('mongoose');
const IdeaModel = require('./Idea.js');

console.log(IdeaModel);

let commentSchema = mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Comment', require: true},
    postId: {type: mongoose.Schema.Types.ObjectId, ref: 'Idea', require: true},
    content: {type: String, require: true}
},
{
    timestamps: {}
});


const Comment = mongoose.model('Comment', commentSchema);

const create = (commentInfo) => {
    return new Promise((resolve, reject) => {
        Comment.create(commentInfo).then(
            doc => {
                console.log(`SUCCESS comment created`);
                return IdeaModel.addComment({_id: doc.postId}, doc._id);
            },
            err => {
                console.log('FAILED comment create', err);
                reject(err);
            }
        )
        .then(
            commentId => {
                console.log(`SUCCESS addComment to user`);
                return Comment.findById(commentId);
            },
            err => {
                console.log(`FAILED addComment to user`);
                reject(err);
            }
        )
        .then(
            comment => {
                resolve(comment);
            },
            err => {
                console.log(err);
                reject(err);
            }
        );
    });
};

//Eg: get({_id: '1235'})
const get = (target) => {
    return new Promise((resolve, reject) => {
        Comment.findOne(target).then(
            doc => {
                console.log(`SUCCESS get comment ${target}`);
                resolve(doc);
            },
            err => {
                console.log('FAILED get comment', err);
                reject(err);
            }
        );
    });
};

//Eg: update({_id: '1235'}, {content: 'ahihi'})
const update = (target, commentInfo) => {
    return new Promise((resolve, reject) => {
        Comment.findOneAndUpdate(target, commentInfo).then(
            doc => {
                console.log(`SUCCESS update comment ${target}`);
                resolve(doc);
            },
            err => {
                console.log(`FAILED update comment ${target}`, err);
                reject(err);
            }
        );
    });
};

const erase = (target) => {
    return Comment.findOneAndRemove(target).then(
        doc => {
            console.log(`SUCCESS erase comment`);
            return IdeaModel.removeComment({_id: doc.postId}, doc._id);
        },
        err => {
            console.log(`FAILED erase comment ${target}`);
            throw err;
        }
    );
};

module.exports = {
    create,
    get,
    update,
    erase
};