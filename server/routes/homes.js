const express = require('express');
const Home = require('../../models/home.js');

const router = express.Router();

router.get('/', (req, res) => {
  Home.find()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.get('/:id', (req, res) => {
  Home.findOne({ home_id: req.params.id })
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.post('/', (req, res) => {
  // TODO..
});

router.put('/:id', (req, res) => {
  // TODO..
});

router.delete('/:id', (req, res) => {
  // TODO..
});


module.exports = router;
