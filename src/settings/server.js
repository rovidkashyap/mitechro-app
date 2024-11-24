const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Endpoint to save form data
app.post('/submit-form', (req, res) => {
  const { fullName, email, mobile, query, comment } = req.body;

  // Validate data
  if (!fullName || !email || !mobile || !query || !comment) {
    return res.status(400).send('All fields are required!');
  }

  // Prepare data to store
  const data = `Full Name: ${fullName}\nEmail: ${email}\nMobile: ${mobile}\nQuery: ${query}\nComment: ${comment}\n---\n`;

  // Path to the text file
  const filePath = path.join(__dirname, 'data', 'customer_queries.txt');

  // Ensure the directory exists
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, {recursive: true });
  }

  // Append data to the text file
  fs.appendFile(filePath, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err.message);
      return res.status(500).send('Failed to save data.');
    }
    res.status(200).send('Data saved successfully!');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});