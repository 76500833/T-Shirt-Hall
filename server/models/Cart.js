const { Schema, model } = require('mongoose');

const cartSchema = new Schema(
  {
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Shirt'
      }
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    total: {
      type: Number
    }
  }
);

const Cart = model('Cart', cartSchema);

module.exports = Cart;