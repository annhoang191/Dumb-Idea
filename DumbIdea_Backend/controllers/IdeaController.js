const express = require('express');
const authentication = require('./Authentication.js');
const Router = express.Router();

const IdeaModel = require('../models/Idea');

// For GET
const numberIdeaPerPage = 4;
const maximumIdea = 20;
const getAllIdea = "getAll";
const id = ":id";
const getAllIdeaRecommendation = "getAllRecommendation";
const getAllIdeaOldest = "getAllOldest";
const search = "search";

// GET idea
const funcGetAllIdea = (req, res) => {
  IdeaModel.getAllIdea(maximumIdea).then(ideas => {
    res.send(ideas);
  }, err => {
    res.send({error: 'Error get all idea !!!'});
  });
};

const funcGetIdeaWithId = (req, res) => {
  IdeaModel.get({ _id: req.params.id }).then(idea => {
    res.send(idea);
  }, err => {
    res.send({error: 'Error get idea with id!!!'});
  });
};

const funcGetAllIdeaRecommendation = (req, res) => {
  IdeaModel.getAllIdeaRecommendation(numberIdeaPerPage).then(ideas => {
    console.log('send idead');
    res.send(ideas);
  }).catch(err => {
    res.send({error: 'Error get all idea recommendation!!!'});
  });
};

const funcGetAllIdeaOldest = (req, res) => {
  IdeaModel.getAllIdeaOldest(maximumIdea).then(ideas => {
    res.send(ideas);
  }, err => {
    res.send({error: 'Error get all idea oldest !!!'});
  });
};

const funcSearch = (req, res) => {
  IdeaModel.searchText(req.query.text).then(docs => {
    res.send(docs);
  })
  .catch(err => {
    res.send({error: 'Error cannot search'});
  });
};

Router.get('/:id', (req, res) => {
  let params = req.params.id;
  console.log('GET', params);
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

    case search:
      funcSearch(req, res);
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
      res.send({error: 'Error get all idea with page!!!'});
    }
  );
});

Router.use(authentication.verify);

Router.post('/', (req, res) => {
  console.log('CREATE IDEA...');
  let newIdea = req.body;
  newIdea.owner = req.decoded;
  IdeaModel.create(req.body).then(idea => {
    res.send({message: 'Created idea'});
  }, err => {
    res.send({error: 'Error create idea !!!'});
  });
});

Router.put('/:id', (req, res) => {
  let newIdea = req.body;
  newIdea.owner = req.decoded;
  IdeaModel.update({ _id: req.params.id }, newIdea).then(
    idea => {
      res.send({message: 'Update idea'});
    },
    err => {
      res.send({error: 'Error update idea !!!'});
    }
  );
});

Router.delete('/:id', (req, res) => {
  IdeaModel.erase({ _id: req.params.id }, req.decoded).then(idea => {
    res.send({message: 'Delete idea successfully'});
  }, err => {
    res.send({error: 'Error delete idea !!!'});
  });
});

module.exports = Router;
