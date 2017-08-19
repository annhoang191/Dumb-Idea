const express = require('express');
const Router = express.Router();

const IdeaModel = require('../models/Idea');

// For GET
const numberIdeaPerPage = 4;
const maximumIdea = 20;
const getAllIdea = "getAll";
const id = ":id";
const getAllIdeaRecommendation = "getAllRecommendation";
const getAllIdeaOldest = "getAllOldest";

Router.post('/', (req, res) => {
  IdeaModel.create(req.body).then(idea => {
    res.send('Created idea');
  }, err => {
    res.send('Error create idea !!!');
  });
});

// GET idea
const funcGetAllIdea = (req, res) => {
  IdeaModel.getAllIdea(maximumIdea).then(ideas => {
    res.send(ideas);
  }, err => {
    res.send('Error get all idea !!!');
  });
};

const funcGetIdeaWithId = (req, res) => {
  IdeaModel.get({ _id: req.params.id }).then(idea => {
    res.send(idea);
  }, err => {
    res.send('Error get idea with id!!!');
  });
};

const funcGetAllIdeaRecommendation = (req, res) => {

  IdeaModel.getAllIdeaRecommendation(numberIdeaPerPage).then(ideas => {
    console.log('send idead');
    res.send(ideas);
  }).catch(err => {
    console.log('err :', err);
    console.log('err send');
    res.send('Error get all idea recommendation!!!');
  });
};

const funcGetAllIdeaOldest = (req, res) => {
  IdeaModel.getAllIdeaOldest(maximumIdea).then(ideas => {
    res.send(ideas);
  }, err => {
    res.send('Error get all idea oldest !!!');
  });
};

Router.get('/:id', (req, res) => {
  let params = req.params.id;
  switch (params) {
    // GET 1 idea with id
    case id:
      funcGetIdeaWithId(req, res);
      break;

    // GET all idea
    case getAllIdea:
      funcGetAllIdea(req, res);
      break;

    // GET all idea new
    case getAllIdeaRecommendation:
      console.log('get all idea');
      funcGetAllIdeaRecommendation(req, res);
      break;

    // GET all idea oldest
    case getAllIdeaOldest:
      console.log('get all idea oldest');
      funcGetAllIdeaOldest(req, res);
      break;

    default:
      break;
  }
});

// GET idea with page
Router.get('/getAll/:id', (req, res) => {
  IdeaModel.getAllIdeaWithPage(req.params.id, numberIdeaPerPage).then(
    ideas => {
      res.send(ideas);
    },
    err => {
      res.send('Error get all idea with page!!!');
    }
  );
});

Router.put('/:id', (req, res) => {
  IdeaModel.update({ _id: req.params.id }, req.body).then(
    idea => {
      res.send('Update idea');
    },
    err => {
      res.send('Error update idea !!!');
    }
  );
});

Router.delete('/:id', (req, res) => {
  IdeaModel.erase({ _id: req.params.id }).then(idea => {
    res.send('Delete idea successfully');
  }, err => {
    res.send('Error delete idea !!!');
  });
});

module.exports = Router;
