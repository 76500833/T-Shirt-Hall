// Converts userId and productId to ObjectId instances.
// Creates a new Cart object with the provided userId, productId, and total.
// Saves the new Cart object to the database.
// Finds the User object that corresponds to the userId from the client.
// Adds the ID of the new Cart to the carts array of the User object.
// Saves the updated User object to the database.
// Returns the new Cart object to the client.
const jwt = require('jsonwebtoken');
const { User, Cart, Shirt } = require('../models');
const { ObjectId } = require('mongoose').Types;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

    shirts: async () => {
      try {
        const shirts = await Shirt.find({});
        return shirts;
      } catch (err) {
        console.error(err);
        return []
      }
    }
  },
  
  Mutation: {
    //run when a graphql mutation called addToCart is ran
    //takes userId, productId, and a total
    // What happens if the shirts go on sale? the total changes, right? 
    createCart: async (_, { userId, productId}) => { // rename createCart
      // Convert userId and productId to ObjectIds
      const userIdObj = new ObjectId(userId);
      const productIdObj = new ObjectId(productId);
        //creates a new cart object with these vales
      const newCart = new Cart({
        products: [productIdObj],
        user: userIdObj
      });
        //saves newCart in the database
      const savedCart = await newCart.save();
        //finds the user obejct that corresponds to the userId from the client
        const user = await User.findById(userIdObj);
        if (!user) {
          throw new Error('User not found');
        }
        user.cart.push(savedCart._id);
      //save updated user object to database
      await user.save();
      //returns new cart object to the client.
      return savedCart;
    },


   
    signup: async (_, { username, email, password }) => {
      // Check if user already exists
      // const existingUser = await User.findOne({ email });
      // if (existingUser) {
      //   throw new Error('User already exists');
      // }

      // Hash the password and create a new user
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();

      // Create a JWT
      const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10s' });

      return { accessToken };
    },

    login: async (_, { email, password }) => {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }

      // Check if password is correct
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error('Email or password is invalid');
      }

      // Create a JWT
      const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10s' });

      return { accessToken };
    },
  
    


// Converts cartId and productId to ObjectId instances.
// Finds the Cart object that corresponds to the cartId from the client.
// Checks if the cart exists. If not, it throws an error.
// Adds the productId to the products array of the Cart object.
// Saves the updated Cart object to the database.
// Returns the updated Cart object to the client.
    // addToCart needs a cartId and productId
    addToCart: async (_, {cartId, productId}) => { 
      const cartIdObj = new ObjectId(cartId);
      const productIdObj = new ObjectId(productId);
      // Find the cart object that corresponds to the cartId from the client
      const cart = await Cart.findById(cartIdObj);
        //adds the ID of the new cart to the users cart array of user object
      cart.products.push(productIdObj);
      // Save updated cart object to database
      const savedCart = await cart.save();
      //returns new cart object to the client.
      return savedCart;
    }
  }
//When you get the products out to dspaly on cart page you can display the total

};

module.exports = resolvers;