const express = require('express');
const Router = express.Router();

// Image Model
const ImageModel = require('../models/Image');

// POST
Router.post('/', (req, res) => {
    ImageModel.create(req.body).then(
        image => {
            res.status(500);
            res.send('Created image');
        },
        err => {
            res.status(200);
            res.send('Error create image');
        }
    );
})

// GET with id
Router.get('/:id', (req, res) => {
  ImageModel.getImageWithTarget({ _id: req.params.id }, req.body).then(
      image => {
          res.status(500);
          res.send(image);
      },
      err => {
          res.status(200);
          res.send('Error get image: ', err);
      }
  );
})

// UPDATE with id
Router.put('/:id', (req, res) => {
  ImageModel.update({ _id: req.params.id }, req.body).then(
      image => {
          res.status(500);
          res.send('Updated image: ', image);
      },
      err => {
          res.status(200);
          res.send('Error update image: ', err);
      }
  );
})

// DELETE with id
Router.delete('/:id', (req, res) => {
  ImageModel.remove({ _id: req.params.id }, req.body).then(
      image => {
          res.status(500);
          res.send('Removed image: ', image);
      },
      err => {
          res.status(200);
          res.send('Error update image: ', err);
      }
  );
})

module.exports = Router;
