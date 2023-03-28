// Home page for logged in user
exports.getHomePage = (req, res) => {
    const heading = 'Welcome to our online store!';
    const description = 'Start shopping for the best deals today.';
  
    res.json({ heading, description });
  };