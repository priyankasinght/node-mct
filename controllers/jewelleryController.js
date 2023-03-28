const jewelleryModel = require('../models/jewelleryModel');

// Get all jewellery products
exports.getAllJewelleryProducts = (req, res) => {
  jewelleryModel.find({}, (err, products) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.json({ products });
  });
};