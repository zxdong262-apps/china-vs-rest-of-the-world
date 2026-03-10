/**
 * Production Server
 * 
 * Serves the built static site in production mode
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../../public')));

// Fallback to index.html for SPA routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Production server running at http://localhost:${PORT}`);
  console.log(`Open your browser to view the site.`);
});
