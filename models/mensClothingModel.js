const mongoose = require('mongoose');

const mensClothingSchema = new mongoose.Schema({
    image: String,
    title: String,
    price: Number,
    category: { type: String, default: "Men's Clothing" },
    description: String,
    rating: {
        count: Number,
        rate: Number,
    },
});

module.exports = mongoose.model('MensClothing', mensClothingSchema);