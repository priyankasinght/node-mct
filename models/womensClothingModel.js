const mongoose = require('mongoose');

const womensClothingSchema = new mongoose.Schema({
    image: String,
    title: String,
    price: Number,
    category: { type: String, default: "Women's Clothing" },
    description: String,
    rating: {
        count: Number,
        rate: Number,
    },
});

module.exports = mongoose.model('WomensClothing', womensClothingSchema);