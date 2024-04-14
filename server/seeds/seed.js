const mongoose = require('mongoose');
const db = require('../config/connection');
const { User, Shirt } = require('../models');


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


const shirtSeed = [
    {
      name: 'T-shirt 1',
      price: 19.99,
      size: 'M',
      description: 'A shirt to remind you of the good ol days.',
      color: 'blue',
      image: 'shirt1.jpg',
      stock: 10,
      category: 'Men'
    },
    {
      name: 'T-shirt 2',
      price: 29.99,
      size: 'L',
      description: '#deep, all your friends will admire your new sweet hoodie.',
      color: 'red',
      image: 'shirt2.jpg',
      stock: 5,
      category: 'unisex'
    },
    {
        name: 'T-shirt 2',
        price: 29.99,
        size: 'L',
        description: 'The internet in the ninetys.',
        color: 'red',
        image: 'shirt3.jpg',
        stock: 5,
        category: 'Men'
    },
    {
      name: 'T-shirt 1',
      price: 19.99,
      size: 'M',
      description: 'A shirt to remind you of the good ol days.',
      color: 'blue',
      image: 'shirt1.jpg',
      stock: 10,
      category: 'Men'
    },
    {
      name: 'T-shirt 2',
      price: 29.99,
      size: 'L',
      description: '#deep, all your friends will admire your new sweet hoodie.',
      color: 'red',
      image: 'shirt2.jpg',
      stock: 5,
      category: 'unisex'
    },
    {
        name: 'T-shirt 2',
        price: 29.99,
        size: 'L',
        description: 'The internet in the ninetys.',
        color: 'red',
        image: 'shirt3.jpg',
        stock: 5,
        category: 'Men'
    }
  ];



//About to run seed twice, well see if I have duplicated the 2 users.
db.once('open', async () => {
    try {
      //! Deletes users when seeding so there arent dups

      await User.deleteMany({});
      await Shirt.deleteMany({})
      await User.create(userSeed);
      await Shirt.create(shirtSeed);
      console.log('All done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });


