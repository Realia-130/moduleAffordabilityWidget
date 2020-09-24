const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  home_id: Number,
  price: Number,
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;
