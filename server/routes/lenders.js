const express = require('express');
const Lender = require('../../models/lender.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Getting lenders...');
});

router.get('/:id', (req, res) => {
  // TODO..
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
