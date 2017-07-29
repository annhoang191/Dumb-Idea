const mongoose = require('mongoose');
const UserModel = require('./models/User.js');
const CommentModel = require('./models/Comment.js');
const IdeaModel = require('./models/Idea.js');

let config = require('./config.json');
config = config[process.env.NODE_ENV];

mongoose.connect(config.dbpath).then(() => {console.log('SUCCESS Database connected');}, err => {console.log('FAILED Database connect');});

let userInfo = {
    username: 'lad',
    password: '1235',
    email: 'anhducle98@gmail.com'
};
/*
UserModel.create(userInfo).then(
    user => {
        console.log(`SUCCESS user created`);
    },
    err => {
        console.log(err);
    }
);
*/


let userPromise = UserModel.get({username: userInfo.username});

userPromise.then(user => {
    console.log('got', user);
})
.then(() => {
    return UserModel.update({username: 'lad'}, {'password': '1998'});
})
.then(() => {
    UserModel.erase({username: 'manh'})
})
;

userPromise.then(
    (user) => {
        return IdeaModel.create({name: 'dumb-idea', owner: user._id});
    }
)
.then(
    idea => {
        console.log(`SUCCESS created idea`, idea);
    },
    err => {
        console.log(`FAILED create idea`);
    }
);


let ideaPromise = IdeaModel.get({name: 'dumb-idea'});

Promise.all([userPromise, ideaPromise])
.then(
    docs => {
        return CommentModel.create({author: docs[0]._id, postId: docs[1]._id, content: 'ahihi'});
    },
    err => {
        console.log(err);
    }
);
/*
.then(
    comment => {
        console.log(`SUCCESS addComment`);
        return CommentModel.erase();
    },
    err => {
        console.log(`FAILED addComment`, err);
    }
)
.then(
    () => {
        console.log(`SUCCESS erase comment`);
    },
    err => {
        console.log(`FAILED erase comment`);
    }
);*/