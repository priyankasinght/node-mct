const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get specific user information
router.get('/:id', userController.getSpecificUser);

// Delete user
router.delete('/:id', userController.deleteUser);

// Update user information
router.put('/:id', userController.updateUser);

// Get gender based user information
router.get('/gender/:gender', userController.getGenderBasedUsers);

module.exports = router;