const express = require('express');
const Router = express.Router();

const CommentModel = require('../models/Comment');

// POST
Router.post('/', (req, res) => {
  CommentModel.create(req.body).then(comment => {
    res.send('Created comment');
  }, err => {
    res.send('Error create comment');
  });
});

// GET: Get comment with id
Router.get('/:id', (req, res) => {
  CommentModel.get({ _id: req.params.id}).then(comment => {
    res.send(comment);
  }, err => {
    res.send('Error get comment: ', err);
  });
});

// PUT: Update comment with id
Router.put('/:id', (req, res) => {

});

// DELETE: Delete comment with id
Router.delete('/:id', (req, res) => {

});

module.exports = Router;
