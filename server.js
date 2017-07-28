const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

let config = require('./config.json');
config = config[process.env.NODE_ENV];
console.log('config =', config);

const apiRouter = require('./api/api.js');

const app = express();

mongoose.connect(config.dbpath, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database server connected");
    }
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve('./public')));

app.use('/api', apiRouter);

app.listen(process.env.PORT || config.port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Server started on port ", process.env.PORT || config.port);

});
