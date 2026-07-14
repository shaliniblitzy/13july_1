# 13july_1

Minimal Node.js HTTP server built with [Express.js](https://expressjs.com/) that exposes two `GET` endpoints.

## Prerequisites

- [Node.js](https://nodejs.org/) **>= 18** (required by Express 5).
- npm (bundled with Node.js).

## Installation

```bash
npm install
```

This installs `express` (`^5.2.1`) and its dependencies into `node_modules/`.

## Running

```bash
npm start
```

The server listens on port **3000** by default. Override it with the `PORT` environment variable (for example, `PORT=8080 npm start`), matching `process.env.PORT || 3000` in `server.js`.

Once the server is running, verify the endpoints with `curl`:

```bash
curl http://localhost:3000/              # -> Hello world
curl http://localhost:3000/good-evening  # -> Good evening
```

## Endpoints

| Method | Path | Response |
|--------|------|----------|
| GET | `/` | `Hello world` |
| GET | `/good-evening` | `Good evening` |
