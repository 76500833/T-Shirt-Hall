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
      const productIdObj = new ObjectId(productId);

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

      //! Create a JWT  (fails)
      const accessToken = jwt.sign({ email }, "abc1234", { expiresIn: "10s" });

      return { accessToken };
    },

    login: async (_, { email, password }) => {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }
      // Check if password is correct
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error("Email or password is invalid");
      }
      // Create a JWT
      const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "10s",
      });
      return { accessToken };
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
