const express = require('express');
const router = express.Router();
const mensClothingController = require('../controllers/mensClothingController');

// Get all men's clothing products
router.get('/', mensClothingController.getAllMensClothingProducts);

module.exports = router;