const express = require('express');
const Lender = require('../../models/lender.js');

const router = express.Router();

router.get('/', (req, res) => {
  Lender.find()
    .then((lenders) => {
      res.status(200).send(lenders);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.get('/:id', (req, res) => {
  Lender.findOne({ _id: req.params.id })
    .then((lender) => {
      res.status(200).send(lender);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.post('/', (req, res) => {
  Lender.findOneAndUpdate({ name: req.body.name }, req.body, { upsert: true, new: true })
    .then((newLender) => {
      res.status(200).send(newLender);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.put('/:id', (req, res) => {
  Lender.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedLender) => {
      res.status(200).send(updatedLender);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.delete('/:id', (req, res) => {
  Lender.deleteOne({ _id: req.params.id })
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

module.exports = router;
