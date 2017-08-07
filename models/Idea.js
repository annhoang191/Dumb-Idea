const mongoose = require('mongoose');
const UserModel = require('./User');

let ideaSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true},
    photo: {type: String}, //save the path to photo
    category: String,
    tags: [],
    briefDescription: String,
    description: String, //this can be a HTML
    estimatedRating: Number, //owner's rating
    rating: Number,
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    status: {
        type: String, // private or public ?
        default: 'private'
    }
},
{
    timestamps: {}
});

const Idea = mongoose.model('Idea', ideaSchema);

const create = (ideaInfo) => {
    return new Promise((resolve, reject) => {
        Idea.create(ideaInfo).then(
            doc => {
                console.log(`SUCCESS Idea ${doc.name} created`);
                return UserModel.addIdea({_id: doc.owner}, doc._id);
            },
            err => {
                console.log('FAILED create Idea', err);
                reject(err);
            }
        ).then(
            ideaId => {
                console.log(`SUCCESS save idea to user`);
                return Idea.findById(ideaId);
            },
            err => {
                console.log(`FAILED save idea to user`);
                reject(err);
            }
        )
        .then(
            idea => {
                resolve(idea);
            },
            err => {
                console.log(err);
                reject(err);
            }
        );
    });
};


//Eg: get({name: 'dumb'})
const get = (target) => {
    return new Promise((resolve, reject) => {
        Idea.findOne(target).then(
            doc => {
                console.log(`SUCCESS get Idea ${target}`);
                resolve(doc);
            },
            err => {
                console.log('FAILED get Idea', err);
                reject(err);
            }
        );
    });
};

const update = (target, ideaInfo) => {
    return new Promise((resolve, reject) => {
        Idea.findOneAndUpdate(target, ideaInfo).then(
            doc => {
                console.log(`SUCCESS update Idea ${target}`);
                resolve(doc);
            },
            err => {
                console.log(`FAILED update Idea ${target}`, err);
                reject(err);
            }
        );
    });
};

const erase = (target) => {
    return new Promise((resolve, reject) => {
        Idea.findOneAndRemove(target).then(
            doc => {
                console.log(`SUCCESS erase Idea ${target}`);
                resolve();
            },
            err => {
                console.log(`FAILED erase Idea ${target}`);
                reject(err);
            }
        );
    });
};

const addComment = (target, commentId) => {
    return new Promise((resolve, reject) => {
        Idea.findOne(target).then(
            idea => {
                idea.comments.push(commentId);
                return idea.save();
            },
            err => {
                console.log(`FAILED get post`, err);
                reject(err);
            }
        )
        .then(
            idea => {
                console.log(`SUCCESS Idea saved`);
                resolve(commentId);
            },
            err => {
                console.log(`FAILED Idea not saved`);
                reject(err);
            }
        );
    });
};

const removeComment = (target, commentId) => {
    return new Promise((resolve, reject) => {
        Idea.findOne(target).then(
            idea => {
                let index = idea.comments.indexOf(commentId);
                if (index != -1) {
                    idea.comments.splice(index, 1);
                }
                return idea.save();
            },
            err => {
                console.log(`FAILED get post`, err);
                reject(err);
            }
        )
        .then(
            idea => {
                console.log(`SUCCESS Idea saved`);
                resolve(commentId);
            },
            err => {
                console.log(`FAILED Idea not saved`);
                reject(err);
            }
        );
    });
};

module.exports = {
    create,
    get,
    update,
    erase,
    addComment,
    removeComment
};
