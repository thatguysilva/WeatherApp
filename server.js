const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// Serve the static files from the Vue app build
app.use(serveStatic(path.join(__dirname, 'dist')));

// Handle any requests that don't match the ones above by sending back Vue's index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log('Server started on port: ' + port);