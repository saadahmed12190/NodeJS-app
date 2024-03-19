// Import required modules
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('<h1>Hi, my name is Saad and this is a test cluster 222222!</h1>');
});

// Define a route for a sample API endpoint
app.get('/api/data', (req, res) => {
  const data = {
    message: 'This is some sample data from the API.',
    timestamp: new Date(),
  };
  res.json(data);
});

// Set up the server to listen on a port
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
