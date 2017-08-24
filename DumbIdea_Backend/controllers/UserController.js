const express = require('express');
const authentication = require('./Authentication');
const Router = express.Router();

const UserModel = require('../models/User');

Router.post('/', (req, res) => {
  UserModel.create(req.body).then(
    user => {
      console.log(`SUCCESS user created`);
      res.send('Created user');
    },
    err => {
      console.log(err);
      res.send('Error: cannot create user');
    }
  );
});

Router.post('/login', (req, res) => {
  console.log('Login route');
  UserModel.login(req.body).then(token => {
    res.status(200).send({token: token});
  })
  .catch(err => {
    console.log(err);
    res.status(401).send({token: null});
  });
});

// GET: Get user with id
Router.get('/:id', (req, res) => {
  let userPromise = UserModel.get({_id: req.params.id});

  userPromise.then(user => {
    res.status(200);
    res.send(user);
  },
  err => {
    res.status(500);
    res.send('Error get user');
  })
});

Router.use(authentication.verify);

Router.get('/verify', (req, res) => {
  res.status(200).send({message: 'Valid token'});
});

// PUT: Update user with id
Router.put('/', (req, res) => {
  let userPromise = UserModel.update({_id: req.decoded}, req.body);

  userPromise.then(user => {
    res.send({message: 'Update user successfully'});
  }, err => {
    res.send({error: 'Error update user'});
  })
});

// DELETE: Delete user with id
Router.delete('/', (req, res) => {
  let userPromise = UserModel.erase({_id: req.decoded});

  userPromise.then(user => {
    res.send({message: 'Delete user successfully'});
  }, err => {
    res.status(500);
    res.send({error: 'Error delete user'});
  })
});

module.exports = Router;
