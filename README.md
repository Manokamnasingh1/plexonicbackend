🛠️ Mini Webpage Builder - Backend

This repository contains the backend for the Mini Webpage Builder, built using Node.js, Express, MongoDB, and Socket.IO.
It provides APIs to save, fetch, and manage webpage schemas, user authentication, and supports real-time collaborative editing.

🎯 Problem Statement

The backend provides the necessary infrastructure for:

Storing webpage layouts and schemas in MongoDB.

Managing user accounts with JWT-based authentication.

Supporting real-time collaborative editing via Socket.IO.

Serving API endpoints for saving, fetching, updating, and publishing pages.

🔹 Objectives

Page Schema Storage:

Save user-created pages (blocks, styles, layout) in MongoDB.

Support saving as draft or published pages.

User Authentication:

Signup and login with secure password hashing.

JWT-based authentication to protect API endpoints.

Real-time Collaboration:

Multiple users can edit the same page at the same time.

Changes are propagated instantly using Socket.IO.

API Endpoints:

CRUD operations for pages.

User authentication routes (login/signup).

Real-time updates via WebSocket events.

🔹 Tech Stack

Node.js – runtime environment

Express.js – backend framework

MongoDB – database for storing page schemas and users

Mongoose – MongoDB object modeling

JWT – authentication

Socket.IO – real-time collaboration

bcrypt – password hashing

cors – cross-origin resource sharing

dotenv – environment variable management

📂 Project Structure
backend/
 ├── controllers/      # API controllers for pages & users
 ├── models/           # MongoDB models: User, Page
 ├── routes/           # Express routes: auth.js, pages.js
 ├── middleware/       # Middleware: auth verification
 ├── socket/           # Socket.IO handlers
 ├── utils/            # Helper functions
 ├── server.js         # Entry point, sets up Express & Socket.IO
 └── .env              # Environment variables

⚙️ Installation & Setup

Clone the repository:

git clone <your-backend-repo-link>
cd backend


Install dependencies:

npm install


Create .env file with the following variables:

PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>


Run the development server:

npm run dev


API will be available at:

http://localhost:5000/
