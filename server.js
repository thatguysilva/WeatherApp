const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

app.use(serveStatic(path.join(__dirname, 'dist'), {'index': ['index.html', 'index.htm']}));

const port = process.env.PORT || 8080;
app.listen(port);

console.log('Server started on port: ' + port);