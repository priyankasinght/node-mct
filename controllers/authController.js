const userModel = require('../models/userModel');

// Register User
exports.register = (req, res) => {
  const { name, password, email, phone_number, gender, city } = req.body;

  // Validate request
  if (!name || !password || !email || !phone_number || !gender || !city) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Check if user exists
  userModel.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    if (user) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Create new user
    const newUser = new userModel({
      name,
      password,
      email,
      phone_number,
      gender,
      city
    });

    // Save user
    newUser.save((err, savedUser) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
    
      // Remove password field from response
      savedUser.password = undefined;
    
      res.json({ user: savedUser });
    });
    });
    };