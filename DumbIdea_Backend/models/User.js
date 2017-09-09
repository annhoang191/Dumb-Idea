const mongoose = require('mongoose');
require('mongoose-type-email');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


let userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    avatar: {
        type : String, //path
        default: '/avatar.png'
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
        unique: true,
        work: { type: mongoose.SchemaTypes.Email, allowBlank: true }, // allows '' as a value
        home: mongoose.SchemaTypes.Email // throws when the value is ''
    },
    createdIdeas: [{type: mongoose.Schema.Types.ObjectId, ref: 'Idea'}],
    followedIdeas: [{type: mongoose.Schema.Types.ObjectId, ref: 'Idea'}],
    ratedIdeas: [{}],
    status: {
        type: String,
        require: true,
        default: 'active' //or 'inactive'
    }
},
{
    timestamps: {}
});

userSchema.methods.comparePassword = function(password) {
    console.log(password, this.password);
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.createdIdeasContains = function(ideaId) {
    return this.createdIdeas.includes(mongoose.Schema.Types.ObjectId(ideaId));
}

userSchema.methods.followedIdeasContains = function(ideaId) {
    return this.followedIdeas.includes(mongoose.Schema.Types.ObjectId(ideaId));
}

const User = mongoose.model('User', userSchema);

const create = (userInfo) => {
    return new Promise((resolve, reject) => {
        console.log('userInfo', userInfo);
        userInfo.password = bcrypt.hashSync(userInfo.password, 10);
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

const login = (userInfo) => {
    return new Promise((resolve, reject) => {
        User.findOne({
            username: userInfo.username
        })
        .then(user => {
            if (!user) {
                reject(new Error('User not found'));
            } else {
                console.log('user', user);
                if (!user.comparePassword(userInfo.password)) {
                    reject(new Error('Wrong password'));
                } else {
                    resolve({
                        token: jwt.sign({id: user._id}, 'SECRET'),
                        userId: user._id
                    });
                }
            }
        })
        .catch(err => {
            reject(err);
        });
    });
};

//USAGE: get(object); Eg: get({username: 'lad'}); get({_id: '1235'});
const get = (target) => {
    return new Promise((resolve, reject) => {
        console.log('getUser', target);
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
    console.log('call update user');
    return new Promise((resolve, reject) => {
        if (userInfo.username) {
            delete userInfo.username;
        }
        if (userInfo.password) {
            userInfo.password = bcrypt.hashSync(userInfo.password, 10);
        }
        console.log('target', target);
        console.log('userInfo', userInfo);
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
                resolve();
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
                if (user.followedIdeas.indexOf(ideaId) == -1) {
                    user.followedIdeas.push(ideaId);
                }
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

const toggleFollow = (target, ideaId) => {
    return new Promise((resolve, reject) => {
        User.findOne(target).then(
            user => {
                let index = user.followedIdeas.indexOf(ideaId);
                if (index != -1) {
                    user.followedIdeas.splice(index, 1);
                } else {
                    user.followedIdeas.push(ideaId);
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
    })
};

const rateIdea = (target, ideaId, newRating) => {
    return new Promise((resolve, reject) => {
        let count = 0;
        let value = 0;
        User.findOne(target).then(
            user => {
                let index = -1;
                for (let i = 0; i < user.ratedIdeas.length; ++i) if (user.ratedIdeas[i].ideaId == ideaId) {
                    index = i;
                    break;
                }

                if (index == -1) {
                    count = 1;
                    value = newRating;
                    user.ratedIdeas.push({
                        ideaId: ideaId,
                        rating: newRating
                    });
                } else {
                    count = 0;
                    value = newRating - user.ratedIdeas[index].rating;
                    console.log("BEFORE", user.ratedIdeas[index].rating);
                    console.log("VALUE", value);
                    console.log("AFTER", newRating);
                    user.ratedIdeas[index].rating = newRating;
                }
                user.markModified('ratedIdeas');
                return user.save();
            },
            err => {
                console.log(`FAILED get rateIdea`, err);
                reject(err);
            }
        )
        .then(
            user => {
                console.log(`SUCCESS user saved`);
                console.log(user);
                resolve({count, value});
            },
            err => {
                console.log(`FAILED cannot save user`, err);
                reject(err);
            }
        );
    })
};

module.exports = {
    create,
    get,
    update,
    erase,
    addIdea,
    removeIdea,
    followIdea,
    unfollowIdea,
    login,
    toggleFollow,
    rateIdea
};
