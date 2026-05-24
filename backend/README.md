# Online Internship Tracking & Evaluation System

## Project Overview

The Online Internship Tracking & Evaluation System is a full-stack web application developed using ReactJS, Node.js, Express, and SQLite.

The platform helps training organizations manage internships, assign tasks, track intern progress, collect mentor evaluations, and monitor internship completion workflows.

---

# Tech Stack

## Frontend

- ReactJS
- React Router DOM
- Axios

## Backend

- Node.js
- Express.js

## Database

- SQLite

---

# Features Implemented

## Internship Management

- Create internships
- View internship listings
- Internship status tracking

## Task Management

- Assign internship tasks
- Add milestones and deadlines

## Task Submissions

- Interns can submit task updates
- Duplicate submission prevention

## Mentor Evaluations

- Add mentor ratings
- Add mentor feedback

## Analytics Dashboard

- Internship statistics
- Task statistics
- Submission tracking
- Evaluation metrics

## Additional Features

- Role-based workflow structure
- Responsive dashboard layout
- API integration with frontend
- SQLite data persistence

---

# API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | /api/internships | Create internship |
| GET    | /api/internships | Get internships   |
| POST   | /api/tasks       | Assign task       |
| GET    | /api/tasks       | Get tasks         |
| POST   | /api/submissions | Submit task       |
| GET    | /api/submissions | Get submissions   |
| POST   | /api/evaluations | Add evaluation    |
| GET    | /api/evaluations | Get evaluations   |

---

# Folder Structure

backend/
│
├── database/
├── middleware/
├── routes/
├── frontend/
│ ├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│
├── server.js
├── db.js
├── package.json

---

# Installation Steps

## Backend Setup

```bash
npm install
npm start
```

Backend runs on:

```bash
http://localhost:5000
```

---

## Frontend Setup

Go to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Validation Features

- Prevent duplicate task submissions
- Validate mentor evaluation ratings
- Form validations for required fields
- API error handling

---

# Sample Test Data

## Internship

- Title: AI Research Internship
- Domain: Machine Learning
- Mentor ID: 101

## Task

- Milestone: Dashboard UI
- Deadline: 2026-12-30

## Evaluation

- Rating: 5
- Feedback: Excellent progress

---

# Future Enhancements

- Authentication and JWT
- Role-based login system
- Email notifications
- Internship certificates
- Progress charts
- Pagination and filtering

---

# Deployment

Frontend and backend deployment links will be added after deployment.

---

# Author

Developed as part of internship assignment submission.
