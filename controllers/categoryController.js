// Get all categories
exports.getAllCategories = (req, res) => {
    const categories = [
      { name: 'Electronic' },
      { name: 'Jewellery' },
      { name: "Men's Clothing" },
      { name: "Women's Clothing" }
    ];
  
    res.json({ categories });
  };