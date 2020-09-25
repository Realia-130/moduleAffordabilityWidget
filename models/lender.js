const mongoose = require('mongoose');

const offeringSchema = new mongoose.Schema({
  terms: String,
  rate: Number,
  apr: Number,
  fees: Number,
});

const reviewSchema = new mongoose.Schema({
  rating: Number,
});

const lenderSchema = new mongoose.Schema({
  name: String,
  favorite: Boolean,
  offerings: [offeringSchema],
  reviews: [reviewSchema],
});

const Lender = mongoose.model('Lender', lenderSchema);

module.exports = Lender;
