const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    avatar: {
        type : String //path
    },
    address: {
        type: String,
        require: false
    },
    password: {
        type: String,
        require: true
    }, //TODO: encode password
    email: {
        type: String,
        require: false,
        unique: true
    },
    createdIdeas: [{type: mongoose.Schema.Types.ObjectId, ref: 'Idea'}],
    followedIdeas: [{type: mongoose.Schema.Types.ObjectId, ref: 'Idea'}],
    whoRated: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    status: {
        type: String,
        require: true,
        default: 'active' //or 'inactive'
    }
},
{
    timestamps: {}
});

const User = mongoose.model('User', userSchema);

const create = (userInfo) => {
    return new Promise((resolve, reject) => {
        User.create(userInfo).then(
            doc => {
                console.log(`SUCCESS User ${doc.username} created`);
                resolve(doc);
            },
            err => {
                console.log('FAILED create user', err);
                reject(err);
            }
        );
    });
};


//USAGE: get(object); Eg: get({username: 'lad'}); get({_id: '1235'});
const get = (target) => {
    return new Promise((resolve, reject) => {
        User.findOne(target).then(
            doc => {
                console.log(`SUCCESS get user ${target}`);
                let data = doc.toJSON();
                delete data['password'];
                resolve(data);
            },
            err => {
                console.log('FAILED get user', err);
                reject(err);
            }
        );
    });
};

//Eg: update({username: 'lad'}, {password: '1998'})
const update = (target, userInfo) => {
    return new Promise((resolve, reject) => {
        User.findOneAndUpdate(target, userInfo).then(
            doc => {
                console.log(`SUCCESS update user ${target}`);
                resolve(doc);
            },
            err => {
                console.log(`FAILED update user ${target}`, err);
                reject(err);
            }
        );
    });
};

const erase = (target) => {
    return new Promise((resolve, reject) => {
        User.findOneAndUpdate(target, {status: 'inactive'}).then(
            doc => {
                console.log(`SUCCESS erase user ${target}`);
                resolve(doc);
            },
            err => {
                console.log(`FAILED erase user ${target}`);
                reject(err);
            }
        );
    });
};

const addIdea = (target, ideaId) => {
    return new Promise((resolve, reject) => {
        User.findOne(target).then(
            user => {
                user.createdIdeas.push(ideaId);
                return user.save();
            },
            err => {
                console.log(`FAILED find target user to addIdea`);
                reject(err);
            }
        )
        .then(
            user => {
                console.log(`SUCCESS addIdea to user`);
                resolve(ideaId);
            },
            err => {
                console.log(`FAILED addIdea to user`, err);
                reject(err);
            }
        );
    });
};

const removeIdea = (target, ideaId) => {
    return new Promise((resolve, reject) => {
        User.findOne(target).then(
            user => {
                let index = user.createdIdeas.indexOf(ideaId);
                if (index != -1) {
                    user.createdIdeas.splice(index, 1);
                }
                return user.save();
            },
            err => {
                console.log(`FAILED get post`, err);
                reject(err);
            }
        )
        .then(
            user => {
                console.log(`SUCCESS user saved`);
                resolve(ideaId);
            },
            err => {
                console.log(`FAILED cannot save user`, err);
                reject(err);
            }
        );
    });
};

const followIdea = (target, ideaId) => {
    return new Promise((resolve, reject) => {
        User.findOne(target).then(
            user => {
                user.followedIdeas.push(ideaId);
                return user.save();
            },
            err => {
                console.log(`FAILED find target user to addIdea`);
                reject(err);
            }
        )
        .then(
            user => {
                console.log(`SUCCESS addIdea to user`);
                resolve(ideaId);
            },
            err => {
                console.log(`FAILED addIdea to user`, err);
                reject(err);
            }
        );
    });
};

const unfollowIdea = (target, ideaId) => {
    return new Promise((resolve, reject) => {
        User.findOne(target).then(
            user => {
                let index = user.followedIdeas.indexOf(ideaId);
                if (index != -1) {
                    user.followedIdeas.splice(index, 1);
                }
                return user.save();
            },
            err => {
                console.log(`FAILED get post`, err);
                reject(err);
            }
        )
        .then(
            user => {
                console.log(`SUCCESS user saved`);
                resolve(ideaId);
            },
            err => {
                console.log(`FAILED cannot save user`, err);
                reject(err);
            }
        );
    });
};


const authenticate = (username, password) => {
    return new Promise((resolve, reject) => {
        User.findOne({username: username}).then(
            user => {
                if (user.password == password) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }, err => {
                reject(err);
            }
        )
    })
}

module.exports = {
    create,
    get,
    update,
    erase,
    addIdea,
    removeIdea,
    followIdea,
    unfollowIdea,
    authenticate
};
