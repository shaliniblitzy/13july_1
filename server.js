/**
 * server.js — Express.js application entry point.
 *
 * A minimal, single-process HTTP server built on the Express framework.
 * It exposes two plain-string GET endpoints:
 *   - GET /             -> "Hello world"   (baseline endpoint)
 *   - GET /good-evening -> "Good evening"  (added endpoint)
 *
 * Module system: CommonJS (require). The port is environment-overridable via
 * the PORT variable and defaults to the conventional 3000. Run with
 * `npm start` (i.e. `node server.js`).
 */

'use strict';

// Sole third-party dependency; resolved from node_modules per package.json.
const express = require('express');

// Instantiate the Express application.
const app = express();

// Baseline endpoint: responds with the exact plain string "Hello world".
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Added endpoint: responds with the exact plain string "Good evening".
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Resolve the listening port: honor process.env.PORT, otherwise default to 3000.
const PORT = process.env.PORT || 3000;

// Bind the server and log the bound port once it is listening.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
