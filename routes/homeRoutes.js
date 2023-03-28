const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeControllers');

// Home page for logged in user
router.get('/', homeController.getHomePage);

module.exports = router;