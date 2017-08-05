const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const formidable = require('express-formidable');

let config = require('./config.json');
config = config[process.env.NODE_ENV];
console.log('config =', config);

const apiRouter = require('./api/api.js');
const userController = require('./controllers/UserController.js');
const commentController = require('./controllers/CommentController.js');

const app = express();

mongoose.connect(config.dbpath, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database server connected");
    }
});

app.use(formidable());

app.use((req, res, next) => {
  console.log(req.fields);
  req.body = req.fields;
  next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve('./public')));

app.use('/api', apiRouter);

// API
app.use('/api/user', userController);
app.use('/api/comment', commentController);

app.listen(process.env.PORT || config.port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Server started on port ", process.env.PORT || config.port);

});
