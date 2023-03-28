const mongoose = require('mongoose');

const jewellerySchema = new mongoose.Schema({
    image: String,
    title: String,
    price: Number,
    category: { type: String, default: 'Jewellery' },
    description: String,
    rating: {
        count: Number,
        rate: Number,
    },
});

module.exports = mongoose.model('Jewellery', jewellerySchema);