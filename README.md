# Grievance Redressal System for Mepco Schlenk Engineering College

This project is a simple grievance redressal system built with Angular for the frontend and Node.js/Express for the backend, connected to MongoDB.

## Features

- User signup and login
- User complaint submission
- Instruction page
- Admin signup and login
- Admin complaint management (accept/decline/reply)

## Technologies Used

- Angular (frontend)
- Node.js with Express (backend)
- MongoDB (database)
- Simple CSS for styling

## Project Structure

- Frontend: Angular app with 5 main components/pages
- Backend: Express server with REST API routes
- MongoDB queries for CRUD operations on users and complaints

## Setup Instructions

1. Clone the repository.
2. Navigate to the frontend directory and run:
   ```
   npm install
   ng serve
   ```
3. Navigate to the backend directory and run:
   ```
   npm install
   node server.js
   ```
4. Make sure MongoDB is running locally or provide your MongoDB URI in the backend config.
5. Open your browser and go to `http://localhost:4200` to access the frontend.

## MongoDB Queries

- User signup: Insert user document into `users` collection.
- User login: Find user by email and password.
- Complaint submission: Insert complaint document into `complaints` collection.
- Admin actions: Update complaint status and add admin reply.
