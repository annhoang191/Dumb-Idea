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
    tags: {type: String, default:""},
    briefDescription: {type: String, default: ""},
    description: {type: String, default: ""},
    estimatedRating: Number, //owner's rating
    noUsersRated: {type: Number, default: 0},//number of users rated this idea
    ratingSum: {type: Number, default: 0},
    whoRated: Object,
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    status: {
        type: String, // private or public ?
        default: 'private'
    }
},
{
    timestamps: {}
});

ideaSchema.index({
    name: 'text',
    category: 'text',
    tags: 'text',
    briefDescription: 'text',
    description: 'text'
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
}

//Eg: get({name: 'dumb'})
const get = (target) => {
    return new Promise((resolve, reject) => {
        Idea.findOne(target).populate('owner').populate('comments').then(
            doc => {
                console.log(`SUCCESS get Idea ${target}`);
                delete doc.owner.password;
                resolve(doc);
            },
            err => {
                console.log('FAILED get Idea', err);
                reject(err);
            }
        );
    });
}

const getAllIdea = (maximumIdea) => {
    return new Promise((resolve, reject) => {
        Idea.find().limit(maximumIdea).sort({ updatedAt: -1}).exec().then(
          ideas => {
            resolve(ideas);
          },
          err => {
            reject(err);
          }
        );
    });
}

const getAllIdeaWithPage = (page, maximumIdea) => {
  return new Promise((resolve, reject) => {
      Idea.find().limit(maximumIdea).sort({ updatedAt: -1}).skip((page-1) * maximumIdea).populate('owner').populate('comments').exec().then(
        ideas => {
          resolve(ideas);
        },
        err => {
          reject(err);
        }
      );
  });
}

const getAllIdeaWithPageFull = (page, maximumIdea, categories, searchText="", sortByDate=-1) => {
    return new Promise((resolve, reject) => {
        console.log("categories", categories);
        let target = {
            $or: categories.map((e) => { return {"category": e }})
        };
        if (searchText && searchText != "") {
            Object.assign(target, {$text: {$search: searchText}});
        }
        console.log("target", target);
        Idea.find(target).limit(maximumIdea).sort({updatedAt: sortByDate}).skip((page-1) * maximumIdea).populate('owner').populate('comments').exec().then(
            ideas => {
                console.log("ideas", ideas);
                resolve(ideas);
            },
            err => {
                reject(err);
            }
        );
    });
}

const getAllIdeaOldest = (maximumIdea) => {
    return new Promise((resolve, reject) => {
        Idea.find().limit(maximumIdea).sort({ createdAt: 1}).populate('owner').populate('comments').exec().then(
          ideas => {
            resolve(ideas);
          },
          err => {
            reject(err);
          }
        );
    });
}

const getAllIdeaRecommendation = (maximumIdea) => {
  return new Promise((resolve, reject) => {
      Idea.find().limit(maximumIdea).sort({ rating: -1}).populate('owner').populate('comments').exec().then(
        ideas => {
          resolve(ideas);
        },
        err => {
          console.log('err: ',err);
          reject(err);
        }
      );
  });
}



const update = (target, ideaInfo) => {
    return new Promise((resolve, reject) => {
        Idea.findOne(target).populate('owner').populate('comments').then(
            doc => {
                if (doc.owner._id != ideaInfo.owner) {
                    reject(new Error('Permission denied'));
                } else {
                    Object.assign(doc, ideaInfo);
                    return doc.save();
                }
            },
            err => {
                console.log(`FAILED update Idea ${target}`, err);
                reject(err);
            }
        )
        .then(
            doc => {
                console.log(`SUCCESS update Idea ${target}`);
                resolve(doc);
            },
            err => {
                console.log(`FAILED saving Idea`);
                reject(err);
            }
        );
    });
};

const erase = (target, ownerId) => {
    return new Promise((resolve, reject) => {
        let toBeRemoved = null;
        Idea.findOne(target).then(
            doc => {
                if (doc.owner != ownerId) {
                    reject(new Error('Permission denied'));
                } else {
                    toBeRemoved = doc;
                    return UserModel.removeIdea({_id: doc.owner}, doc._id);
                }
            },
            err => {
                console.log(`FAILED erase Idea ${target}`);
                reject(err);
            }
        )
        .then(
            doc => {
                console.log(`SUCCESS erase Idea ${target}`);
                return toBeRemoved.remove();
            },
            err => {
                reject(err);
            }
        ).then(
            doc => {
                resolve();
            },
            err => {
                reject(err);
            }
        );
    });
}

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
}

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
}

const searchText = (text, limit = 20) => {
    return new Promise((resolve, reject) => {
        Idea.find({
            $text: {
                $search: text
            }//,
            //status: 'public'
        })
        .limit(limit)
        .populate('owner').populate('comments')
        .exec((err, docs) => {
            if (err) {
                console.log(`FAILED searchText`, err);
                reject(err);
            } else {
                console.log(`SUCCESS searchText`);
                resolve(docs);
            }
        });
    });
}

const rateIdea = (target, userId, newRating) => {
    return new Promise((resolve, reject) => {
        let count = 0;
        let value = 0;

        UserModel.rateIdea({_id: userId}, target._id, newRating).then(
            data => {
                count = data.count;
                value = data.value;
                return Idea.findOne(target);
            }
        )
        .then(idea => {
            idea.noUsersRated += count;
            idea.ratingSum += value;
            return idea.save();
        }, err => {
            console.log(err);
            reject(err);
        })
        .then(idea => {
            console.log(`SUCCESS rateIdea`);
            resolve(idea);
        }, err => {
            console.log(err);
            reject(err);
        });
    });
};

module.exports = {
    create,
    get,
    getAllIdea,
    getAllIdeaWithPageFull,
    getAllIdeaRecommendation,
    getAllIdeaWithPage,
    getAllIdeaOldest,
    update,
    erase,
    addComment,
    removeComment,
    searchText,
    rateIdea
};
