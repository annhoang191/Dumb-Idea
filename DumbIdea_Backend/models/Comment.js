const mongoose = require('mongoose');
const IdeaModel = require('./Idea');

let commentSchema = mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true},
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
        Comment.findOne(target).then(
            doc => {
                if (doc._id != commentInfo.author) {
                    reject(new Error('Permission denied'));
                } else {
                    doc.content = commentInfo.content;
                    return doc.save();
                }
            },
            err => {
                console.log(`FAILED update comment ${target}`, err);
                reject(err);
            }
        )
        .then(
            doc => {
                resolve(doc);
            },
            err => {
                reject(err);
            }
        );
    });
};

const erase = (target, authorId) => {
    return Comment.findOne(target).then(
        doc => {            
            if (authorId != doc.author) {
                reject(new Error('Permission denied'));
            } else {
                return Promise.all([
                    IdeaModel.removeComment({_id: doc.postId}, doc._id),
                    doc.remove()
                ]);
            }
        },
        err => {
            console.log(`FAILED erase comment ${target}`);
            reject(err);
        }
    ).then(
        docs => {
            console.log(`SUCCESS erase comment`);
            resolve();
        },
        err => {
            reject(err);
        }
    );
};

module.exports = {
    create,
    get,
    update,
    erase
};
