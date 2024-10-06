const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory data storage (acts as a database)
let formData = {};

// Serve the static form page
app.use(express.static('public'));

// POST route to submit form data
app.post('/submit', (req, res) => {
  const { name, email, password } = req.body;
  // Store form data in-memory
  const newData = { name, email, password };
  formData.push(newData);
  res.json({ message: 'Form data submitted successfully', data: newData});
});

// GET route to retrieve form data
app.get('/get-data', (req, res) => {
  if (Object.keys(formData).length === 0) {
    return res.status(404).json({ message: 'No data available' });
  }
  res.json(formData);
});


// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
