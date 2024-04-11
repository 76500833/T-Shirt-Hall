const mongoose = require('mongoose');
const db = require('../config/connection');
const { User } = require('../models');

const userSeed = [
  {
    username: 'testUser1',
    email: 'test1@example.com',
    password: 'password1',
    cart: []
  },
  {
    username: 'testUser2',
    email: 'test2@example.com',
    password: 'password2',
    cart: []
  },

];

db.once('open', async () => {
  try {
    await User.create(userSeed);
    console.log('All done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});