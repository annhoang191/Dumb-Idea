const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const formidable = require('express-formidable');

let config = require('./config.json');
config = config[process.env.NODE_ENV];
console.log('config =', config);

const userController = require('./controllers/UserController');
const commentController = require('./controllers/CommentController');
const ideaController = require('./controllers/IdeaController');

const app = express();

mongoose.connect(config.dbpath, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database server connected");
    }
});

// Middle ware
// app.use(formidable());


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "token");
  if (req.method == 'OPTIONS') {
    res.end();
    return;
  }
  next();
});

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve('./public')));

// API
app.use('/api/user', userController);
app.use('/api/comment', commentController);
app.use('/api/idea', ideaController);

app.listen(process.env.PORT || config.port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Server started on port ", process.env.PORT || config.port);

});
