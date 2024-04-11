// Converts userId and productId to ObjectId instances.
// Creates a new Cart object with the provided userId, productId, and total.
// Saves the new Cart object to the database.
// Finds the User object that corresponds to the userId from the client.
// Adds the ID of the new Cart to the carts array of the User object.
// Saves the updated User object to the database.
// Returns the new Cart object to the client.

const { User, Cart } = require('../models');
const { ObjectId } = require('mongoose').Types;
const mongoose = require('mongoose');
const resolvers = {
  //Querys all users
  Query: {
    users: async () => {
      try {
        const users = await User.find({});
        return users;
      } catch (err) {
        console.error(err);
        return [];
      }
    },
  },
  
  Mutation: {
    //run when a graphql mutation called addToCart is ran
    //takes userId, productId, and a total
    addToCart: async (_, { userId, productId, total }) => {
      // Convert userId and productId to ObjectIds
      const userIdObj = new ObjectId(userId);
      const productIdObj = new ObjectId(productId);
        //creates a new cart object with these vales
      const newCart = new Cart({
        products: [productIdObj],
        user: userIdObj,
        total: total
      });
        //saves newCart in the database
      const savedCart = await newCart.save();
        //finds the user obejct that corresponds to the userId from the client
      const user = await User.findById(userIdObj);
        //adds the ID of the newCrt to the users cart array of user object
      user.carts.push(savedCart._id);
      //save updated user object to database
      await user.save();
      //returns new cart object to the client.
      return savedCart;
    }
  }


  
};

module.exports = resolvers;