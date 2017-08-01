const express = require('express');
const Router = express.Router();

const UserModel = require('../models/User.js');

// POST
Router.post('/', (req, res) => {
  UserModel.create(req.body).then(
      user => {
          console.log(`SUCCESS user created`);
          res.send('Created user');
      },
      err => {
          console.log(err);
          res.send('Error: ' + err);
      }
  );
});

// GET: Get user with id
Router.get('/:id', (req, res) => {
  let userPromise = UserModel.get({_id: req.params.id});

  userPromise.then(user => {
      console.log('got', user);
      res.send('Get user successfully');
  })
});

// PUT: Update user with id
Router.put('/:id', (req, res) => {
  let userPromise = UserModel.get({_id: req.params.id});

  userPromise.then(() => {
      let user = UserModel.update(req.body);
      res.send('Update user successfully');
  })
});

// DELETE: Delete user with id
Router.delete('/:id', (req, res) => {

});
