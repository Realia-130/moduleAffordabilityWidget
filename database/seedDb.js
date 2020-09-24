const faker = require('faker');
const mongoose = require('mongoose');
const Home = require('../models/home.js');
const Lender = require('../models/lender.js');

// Connect to DB
mongoose.connect('mongodb://localhost/affordability', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database...'));

// Seed Homes
for (let i = 0; i < 100; i += 1) {
  const price = faker.finance.amount(500000, 10000000, 0);
  const homeId = i;
  Home.create({
    home_id: homeId,
    price,
  });
}

// Seed Lenders
const getRandomOffering = function () {
  const offeringOptions = ['30 Year Fixed', '15 Year Fixed', '5/1 Arm'];
  const randomIndex = Math.floor(Math.random() * offeringOptions.length);
  return offeringOptions[randomIndex];
};

const generateOfferings = function () {
  const offerings = [];
  const randomNumber = Math.floor(Math.random() * 10);
  for (let i = 0; i < randomNumber; i += 1) {
    offerings.push({
      terms: getRandomOffering(),
      rate: faker.finance.amount(2, 5, 3),
      apr: faker.finance.amount(2, 5, 3),
      fees: faker.finance.amount(0, 550, 0),
    });
  }
  return offerings;
};

const generateReviews = function () {
  const reviews = [];
  const randomNumber = Math.floor(Math.random() * 100);
  for (let i = 0; i < randomNumber; i += 1) {
    reviews.push({
      rating: faker.finance.amount(0, 5, 0),
    });
  }
  return reviews;
};

for (let i = 0; i < 10; i += 1) {
  const data = {
    name: faker.company.companyName(),
    favorite: false,
    offerings: generateOfferings(),
    reviews: generateReviews(),
  };
  Lender.create(data)
    .catch((err) => console.log(err));
}
