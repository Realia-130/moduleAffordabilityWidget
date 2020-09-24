const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Getting lenders...');
});

module.exports = router;