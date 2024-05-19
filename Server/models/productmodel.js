const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please Enter product Name"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "please Enter product Description"],
    },
    price: {
        type: Number,
        required: [true, "please Enter product price"],
        maxLength: [8, "price can not exceed 8 charecter"],
    },
    rating: {
        type: Number,
        default: 0,
    },
    Image: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    category: {
        type: String,
        required: [true, "please Enter product category"],
    },
    stock: {
        type: Number,
        required: [true, "please Enter product stock"],
        maxLength: [4, "stock can exceed 4 charecters"],
        default: 1,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("product", productSchema);
