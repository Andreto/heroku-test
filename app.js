const http = require('https');
const express = require('express');

const port = process.env.PORT || 3000

const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.writeHeader(200, {'Content-Type': 'text/html'});
  res.end('<h1>Testing heroku</h1>');
});

// Start server
app.listen(port, () => {
    console.log('\x1b[34m%s\x1b[0m','SERVER STARTED');
});