const electronicModel = require('../models/electronicModel');

// Get all electronic products
exports.getAllElectronicProducts = (req, res) => {
  electronicModel.find({}, (err, products) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.json({ products });
  });
};