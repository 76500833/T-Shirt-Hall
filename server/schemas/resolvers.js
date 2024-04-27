// Converts userId and productId to ObjectId instances.
// Creates a new Cart object with the provided userId, productId, and total.
// Saves the new Cart object to the database.
// Finds the User object that corresponds to the userId from the client.
// Adds the ID of the new Cart to the carts array of the User object.
// Saves the updated User object to the database.
// Returns the new Cart object to the client.
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User, Cart, Shirt } = require("../models");
const { ObjectId } = require("mongoose").Types;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { authenticateToken } = require("../middleware/authenticateToken");
const { signToken, AuthenticationError } = require('../utils/auth')
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
        return [];
      }
    },
    cart: async (parent, { userId }) => {
      try {
        const carts = await Cart.find({ user: userId });
        return carts;
      } catch (err) {
        console.error(err);
        return [];
      }
    },
  },

  Mutation: {
    createCart: async (_, { userId, productId }) => {

      const userIdObj = new ObjectId(userId);
        const productIdObj = productId.map(id => new ObjectId(id)); // Convert each productId to an ObjectIdconst productIdObj = new ObjectId(productId);

      const newCart = new Cart({
        products: [productIdObj],
        user: userIdObj,
      });
      //saves newCart in the database
      const savedCart = await newCart.save();
      //finds the user obejct that corresponds to the userId from the client
      const user = await User.findById(userIdObj);
      if (!user) {
        throw new Error("User not found");
      }
      user.cart.push(savedCart._id);
      //save updated user object to database
      await user.save();
      //returns new cart object to the client.
      return savedCart;
    },

    signup: async (_, { username, email, password }) => {
      const user = new User({ username, email, password });
      await user.save();
      const token = signToken(user)
      return { token, user };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError
      }
      const correctPw = await user.isCorrectPassword(password)
      if (!correctPw) {
        throw AuthenticationError
      }
      const token = signToken(user)
      return { token, user };
    },

    addToCart: async (_, { cartId, productId }) => {
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
    },
  },
};

module.exports = resolvers;
