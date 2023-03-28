const mensClothingModel = require('../models/mensClothingModel');

// Get all men's clothing products
exports.getAllMensClothingProducts = (req, res) => {
  mensClothingModel.find({}, (err, products) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.json({ products });
  });
};