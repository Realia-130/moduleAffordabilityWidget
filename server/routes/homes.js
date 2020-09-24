const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Getting homes...');
});

module.exports = router;