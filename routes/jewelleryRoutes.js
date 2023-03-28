const express = require('express');
const router = express.Router();
const jewelleryController = require('../controllers/jewelleryController');

// Get all jewellery products
router.get('/', jewelleryController.getAllJewelleryProducts);

module.exports = router;