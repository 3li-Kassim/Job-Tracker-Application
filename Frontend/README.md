# Job Application Tracker

A full-stack web app for tracking job applications — companies applied to, roles, status, and outcomes — built with a React frontend and a Flask REST API backend.

This was my first full authenticated CRUD project, built solo over about a month while learning React and Flask together.

## Features

- **User authentication** — register, login, logout, and session-based auth with hashed passwords (Flask-Login + bcrypt)
- **Full CRUD** for job applications:
  - **Create** — add a new application via a modal form (company, role, location, job link, status, dates, result)
  - **Read** — view all your applications in a sortable table
  - **Update** — edit an existing application in place, reusing the same modal, pre-filled with existing data
  - **Delete** — remove an application, with a confirmation prompt
- **Per-user data isolation** — every job application is scoped to the logged-in user; you can only see and modify your own entries
- **Form validation** — required-field checks on both the frontend (instant feedback) and backend (data integrity)
- **Live UI feedback** — success/error messages on every action, auto-dismissing modals, and the table refreshes automatically after any change (no manual page reload needed)
- **Conditional navbar** — shows Login/Register when logged out, and Logout when authenticated

## Tech Stack

**Frontend**
- React (with React Router for navigation)
- Vite (build tool / dev server)
- Bootstrap 5 + React-Bootstrap (styling, modal component)

**Backend**
- Flask (Python)
- Flask-SQLAlchemy (ORM)
- Flask-Login (session-based authentication)
- Flask-Bcrypt (password hashing)
- SQLite (database)

**Testing**
- Pytest (unit tests, with Flask test client fixtures)

## Project Structure

```
Job_Application_Tracker/
├── Backend/
│   ├── app/
│   │   ├── __init__.py        # App factory (create_app)
│   │   ├── auth/              # Auth blueprint: register, login, logout
│   │   ├── dashboard/         # Jobs blueprint: CRUD routes for job applications
│   │   ├── models.py          # User and JobApplication SQLAlchemy models
│   │   └── extensions.py      # db, bcrypt, login_manager instances
│   ├── tests/                 # Pytest tests + fixtures (conftest.py)
│   ├── instance/              # SQLite database (not committed)
│   └── requirements.txt
├── Frontend/
│   ├── src/
│   │   ├── Components/        # ModalComp, JobTable, Navbar, Footer
│   │   ├── Pages/              # Dashboard, Login, Register
│   │   └── ...
│   ├── vite.config.js          # Dev server proxy to Flask backend
│   └── package.json
└── README.md
```

## API Endpoints

| Method | Endpoint            | Description                          | Auth required |
|--------|----------------------|---------------------------------------|----------------|
| POST   | `/api/register`      | Create a new user account             | No             |
| POST   | `/api/login`          | Log in                                | No             |
| GET    | `/api/logout`         | Log out                               | Yes            |
| GET    | `/api/current_user`   | Check current authentication status   | No             |
| GET    | `/api/jobs`            | Get all job applications for the current user | Yes  |
| POST   | `/api/jobs`            | Create a new job application          | Yes            |
| PATCH  | `/api/jobs/<id>`       | Update an existing job application    | Yes            |
| DELETE | `/api/jobs/<id>`       | Delete a job application              | Yes            |

## Getting Started

### Backend

```bash
cd Backend
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux
pip install -r requirements.txt
python run.py                # or however the app is started
```

The Flask server runs on `http://127.0.0.1:5000` by default.

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

The Vite dev server runs on `http://localhost:5173` and proxies API requests to the Flask backend (see `vite.config.js`).

### Environment Variables

Create a `.env` file in `Backend/` with your own values (not committed to this repo):

```
SECRET_KEY=your-secret-key-here
```

## Running Tests

```bash
cd Backend
pytest
```

## What I Learned

This project was my first time building authentication and a full CRUD flow from scratch, and my first real use of:

- Session-based auth with Flask-Login and password hashing with bcrypt
- REST API design (proper HTTP methods and status codes for each operation)
- React state management with `useState` and `useEffect`, including controlled forms
- Passing data and callbacks between components with props (parent ↔ child communication)
- Debugging real full-stack issues — CORS/proxy setup, JSON serialization of database objects, date format mismatches between frontend and backend, and git/GitHub configuration
- Writing basic unit tests with Pytest

## Future Improvements

- Dark/light theme toggle
- Search and filter for the applications table
- Email integration (auto-detect application status updates from Gmail)
- Migrate from SQLite to PostgreSQL
- Deploy live (frontend + backend)

## Author

Built by Ali Kassim — [LinkedIn](https://linkedin.com/in/AliKassim1) · [GitHub](https://github.com/3li-Kassim)