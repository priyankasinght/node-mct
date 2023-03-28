const womensClothingModel = require('../models/womensClothingModel');

// Get all men's clothing products
exports.getAllMensClothingProducts = (req, res) => {
  womensClothingModel.find({}, (err, products) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.json({ products });
  });
};