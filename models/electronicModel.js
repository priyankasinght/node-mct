const mongoose = require('mongoose');

const electronicSchema = new mongoose.Schema({
    image: String,
    title: String,
    price: Number,
    category: { type: String, default: 'Electronic' },
    description: String,
    rating: {
        count: Number,
        rate: Number,
    },
});

module.exports = mongoose.model('Electronic', electronicSchema);