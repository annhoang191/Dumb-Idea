const express = require('express');
const authentication = require('./Authentication.js');
const path = require('path');
const Router = express.Router();

var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './public/uploads')
  },
  filename: function(req, file, callback) {
    console.log(file);
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname).toLowerCase());
  }
});
var upload = multer({
  storage: storage,
  fileFilter: function(req, file, callback) {
    var ext = path.extname(file.originalname).toLowerCase();
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(res.end('Only images are allowed'), null);
    }
    callback(null, true);
  }
});

const IdeaModel = require('../models/Idea');

// For GET
const numberIdeaPerPage = 12;
const maximumIdea = 20;
const getAllIdea = "getAll";
const id = "id";
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
    console.log('send idea');
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
      funcGetIdeaWithId(req, res);
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
Router.get('/getAllFull/:id', (req, res) => {
  console.log("HERE");
  IdeaModel.getAllIdeaWithPageFull(req.params.id, numberIdeaPerPage, req.query.categories, req.query.searchText, req.query.sortByDate || -1).then(
    ideas => {
      res.send(ideas);
    },
    err => {
      res.send({error: 'Error get all idea with page full!!!'});
    }
  );
});

Router.use(authentication.verify);

Router.put('/rateidea/:id', (req, res) => {
  IdeaModel.rateIdea({_id: req.params.id}, req.decoded, +req.query.rating).then(ideaId => {
    console.log(`SUCCESS rateIdea`, ideaId);
    res.status(200).send({'message': 'rateIdea successfully'});
  })
  .catch(err => {
    console.log(`FAILED rateIdea`, err);
    res.status(500).send({'error': 'Error rateIdea'});
  });
});

Router.post('/', upload.single('image'), (req, res) => {
  console.log('CREATE IDEA...');
  let newIdea = req.body;
  newIdea.owner = req.decoded;
  if (req.file) newIdea.photo = req.file.path.split('/').slice(1).join('/');
  IdeaModel.create(newIdea).then(idea => {
    res.send({
      message: 'Created idea',
      id: idea._id
    });
  }, err => {
    res.send({error: 'Error create idea !!!'});
  });
});

Router.put('/:id', upload.single('image'), (req, res) => {
  let newIdea = req.body;
  newIdea.owner = req.decoded;
  if (req.file) newIdea.photo = req.file.path.split('/').slice(1).join('/');
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
