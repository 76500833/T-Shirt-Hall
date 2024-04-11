const { User, Cart } = require('../models');

const resolvers = {
  Mutation: {
    //run when a graphql mutation called addToCart is ran
    //takes userId, productId, and a total
    addToCart: async (_, { userId, productId, total }) => {
        //creates a new cart object with these vales
      const newCart = new Cart({
        products: [productId],
        user: userId,
        total: total
      });
        //saves newCart in the database
      const savedCart = await newCart.save();
        //finds the user obejct that corresponds to the userId from the client
      const user = await User.findById(userId);
      user.carts.push(savedCart._id);
      await user.save();
      return savedCart;
    }
  }
};

module.exports = resolvers;