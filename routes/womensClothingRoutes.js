const express = require('express');
const router = express.Router();
const womensClothingController = require('../controllers/womensClothingController');

// Get all men's clothing products
router.get('/', womensClothingController.getAllMensClothingProducts);

module.exports = router;