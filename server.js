'use strict';

const express = require('express');

const app = express();

// Baseline endpoint.
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Added endpoint.
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

const PORT = process.env.PORT || 3000;

// Express 5 delivers listen errors (e.g. EADDRINUSE) to this callback.
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server listening on port ${PORT}`);
});
