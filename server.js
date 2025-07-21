require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// API endpoint for email collection
app.post('/api/collect-email', express.json(), (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).send('Email required');
  
  fs.appendFile('Serverlist.txt', email + '\n', err => {
    if (err) return res.status(500).send('Error saving email');
    res.sendStatus(200);
  });
});

// Handle all other routes by serving index.html
app.get('/:path(*)', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
