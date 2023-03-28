const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const categoryRoutes = require('./routes/categoryRoutes');
const electronicRoutes = require('./routes/electronicRoutes');
const jewelleryRoutes = require('./routes/jewelleryRoutes');
const mensClothingRoutes = require('./routes/mensClothingRoutes');
const userRoutes = require('./routes/userRoutes');
const homeRoutes = require('./routes/homeRoutes');

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

// Create Express app
const app = express();

// Use body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use routes
app.use('/api/categories', categoryRoutes);
app.use('/api/electronics', electronicRoutes);
app.use('/api/jewellery', jewelleryRoutes);
app.use('/api/mens-clothing', mensClothingRoutes);
app.use('/api/users', userRoutes);
app.use('/api/home', homeRoutes);

// Start server
app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
})