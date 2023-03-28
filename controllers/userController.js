const userModel = require('../models/userModel');

// Get specific user information
exports.getSpecificUser = (req, res) => {
  const userId = req.params.id;

  userModel.findById(userId, (err, user) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove password field from response
    user.password = undefined;

    res.json({ user });
  });
};

// Delete user
exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  userModel.findByIdAndDelete(userId, (err, user) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  });
};

// Update user information
exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  userModel.findByIdAndUpdate(
    userId,
    updatedUser,
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Remove password field from response
      user.password = undefined;

      res.json({ user });
    }
  );
};

// Get gender based user information
exports.getGenderBasedUsers = (req, res) => {
  const gender = req.params.gender;

  userModel.find({ gender }, (err, users) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    // Remove password field from response
    users = users.map(user => {
      user.password = undefined;
      return user;
    });

    res.json({ users });
  });
};