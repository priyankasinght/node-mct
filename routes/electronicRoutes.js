const express = require('express');
const router = express.Router();
const electronicController = require('../controllers/electronicController');

// Get all electronic products
router.get('/', electronicController.getAllElectronicProducts);

module.exports = router;