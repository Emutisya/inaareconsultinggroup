# Inaare API Server

## Run

1. Install dependencies in root:
   npm install
2. Start API server:
   npm run server

Server runs on http://localhost:4000 by default.

## Endpoints

- POST /api/auth/login
- POST /api/bookings
- GET /api/bookings (auth)
- PATCH /api/bookings/:id/status (auth)
- POST /api/messages
- GET /api/messages (auth)
- GET /api/content
- PUT /api/content (auth)

## Admin credentials

Set via environment variables:
- ADMIN_EMAIL
- ADMIN_PASSWORD

## Data storage

Persistent JSON file: server/db.json
