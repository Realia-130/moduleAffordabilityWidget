const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const homes = require('./routes/homes');
const lenders = require('./routes/lenders');

const app = express();
const port = 5000;

// Connect to DB
mongoose.connect('mongodb://localhost/affordability', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database...'));

// Serve Client
app.use(express.static(path.join(__dirname, '../client', 'dist')));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// Routes
app.use('/lenders', lenders);
app.use('/homes', homes);

// Start server
app.listen(port, () => console.log(`Listening on port ${port}...`));
