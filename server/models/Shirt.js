const { Schema, model } = require('mongoose');

const shirtSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            trim: true
        },
        size: {
            type: String,
            required: true
        },
        description: {
            type: String,
            trim: true
        },
        color: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        stock: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        }

    }
);

const Shirt = model('Shirt', shirtSchema);

module.exports = Shirt;
