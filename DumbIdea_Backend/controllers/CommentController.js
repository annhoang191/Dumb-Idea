const express = require('express');
const authentication = require('./Authentication.js');
const Router = express.Router();

const CommentModel = require('../models/Comment');

// GET: Get comment with id
Router.get('/:id', (req, res) => {
  CommentModel.get({ _id: req.params.id }).then(comment => {
    res.send(comment);
  }, err => {
    res.send({error: 'Error get comment'});
  });
});

Router.use(authentication.verify);

// POST
Router.post('/', (req, res) => {
  let newComment = req.body;
  newComment.author = req.decoded;
  CommentModel.create(newComment).then(comment => {
    res.send({message: 'Created comment'});
  }, err => {
    res.send({error: 'Error create comment'});
  });
});

// PUT: Update comment with id
Router.put('/:id', (req, res) => {
  let newComment = req.body;
  newComment.author = req.decoded;
  CommentModel.update({ _id: req.params.id }, newComment).then(comment => {
    res.send({message: 'Update idea successfully'});
  }, err => {
    res.send({error: 'Error update idea !!!'});
  });
});

// DELETE: Delete comment with id
Router.delete('/:id', (req, res) => {
  CommentModel.erase({ _id: req.params.id }, req.decoded).then(() => {
    res.send({message: 'Delete comment successfully'});
  }, err => {
    res.send({error: 'Error delete comment !!!'});
  })
});

module.exports = Router;
