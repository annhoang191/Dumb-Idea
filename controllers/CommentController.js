const express = require('express');
const Router = express.Router();

const CommentModel = require('../models/Comment.js');
const IdeaModel = require('../models/Idea.js');

// POST
Router.post('/', (req, res) => {
  Promise.all([userPromise, ideaPromise])
  .then(
      docs => {
          return CommentModel.create({author: docs[0], post: docs[1]});
      },
      err => {
          console.log(err);
      }
  )
  .then(
      comment => {
          console.log(`SUCCESS addComment`);
      },
      err => {
          console.log(`FAILED addComment`, err);
      }
  );
});

// GET: Get comment with id
Router.get('/:id', (req, res) => {

});

// PUT: Update comment with id
Router.put('/:id', (req, res) => {

});

// DELETE: Delete comment with id
Router.delete('/:id', (req, res) => {

});

module.exports = Router;
