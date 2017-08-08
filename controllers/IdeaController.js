const express = require('express');
const Router = express.Router();

const IdeaModel = require('../models/Idea');

Router.post('/', (req, res) => {
  IdeaModel.create(req.body).then(idea => {
    res.send('Created idea');
  }, err => {
    res.send('Error create idea !!!');
  });
});

Router.get('/:id', (req, res) => {
  IdeaModel.get(req.params.id).then(idea => {
    res.send(idea);
  }, err => {
    res.send('Error get idea !!!');
  });
});

Router.put('/:id', (req, res) => {
  IdeaModel.update(req.params.id, req.body).then(idea => {
    res.send('Update idea');
  }, err => {
    res.send('Error update idea !!!');
  });
});

Router.delete('/:id', (req, res) => {
  IdeaModel.erase(req.params.id).then(idea => {
    res.send('Delete idea successfully');
  }, err => {
    res.send('Error delete idea !!!');
  });
});

module.exports = Router;
