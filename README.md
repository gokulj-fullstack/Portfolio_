# Gokul J — Personal Portfolio & Freelance Platform

> **Full Stack Developer | Freelancer**  
> B.E. Computer Science and Engineering — Tagore Engineering College, Anna University (2025)

A modern, high-performance personal portfolio and freelancing platform migrated to **React.js + Vite** on the frontend and **FastAPI (Python)** on the backend.

---

## 🚀 Technology Stack

### Frontend
- **Framework**: React.js 18 with Vite
- **Styling**: SCSS Design System with CSS Custom Properties, Responsive Breakpoints & Flexbox/Grid
- **Typography**: Custom Noe Display Medium + Modern Sans/Serif typography
- **Themes**: 10-theme dynamic color engine (Classic, Dark, Koopa Beach, Choco Mountain, Moo Moo Farm, Bowser's Castle, Yoshi Valley, Rainbow Road, Lobster Life, Hacker News)
- **Icons**: Lucide React + Custom SVG Sprites
- **Build**: Vite with lightning-fast HMR and optimized production bundling

### Backend
- **Framework**: Python 3.15 + FastAPI
- **Data Validation**: Pydantic v2 schemas (`EmailStr`, strict type constraints)
- **Database / ORM**: SQLAlchemy 2.0 with SQLite (local development) / PostgreSQL & MySQL ready for production
- **Security & CORS**: Dynamic CORS middleware for decoupled frontend-backend deployments
- **API Docs**: Automatic interactive Swagger UI at `/docs` and ReDoc at `/redoc`

---

## 📁 Project Structure

```text
portfolio/
├── frontend/
│   ├── public/
│   │   ├── assets/
│   │   │   ├── fonts/          # Noe Display, Lobster web fonts
│   │   │   └── images/         # Project previews & avatar graphics
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/
│   │   │   └── styles/         # SCSS design system & themes.css
│   │   ├── components/
│   │   │   ├── Header.jsx      # Navigation, verified badge & theme toggle
│   │   │   ├── Footer.jsx      # Branding, social links, education info
│   │   │   ├── Navigation.jsx  # Desktop and animated mobile drawer
│   │   │   └── ThemePicker.jsx # 10-theme interactive switcher
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── FreelancingSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   ├── EducationSection.jsx
│   │   │   └── ContactSection.jsx
│   │   ├── data/
│   │   │   ├── portfolioData.js # Centralized Gokul J portfolio data
│   │   │   └── themes.js        # Color palettes for all 10 themes
│   │   ├── App.jsx             # Main application orchestrator
│   │   └── main.jsx            # React root mount
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── backend/
│   ├── app/
│   │   ├── database/
│   │   │   ├── connection.py   # SQLAlchemy engine & session factory
│   │   │   └── models.py       # ContactSubmission database model
│   │   ├── schemas/
│   │   │   ├── contact.py      # Pydantic input validation models
│   │   │   └── portfolio.py    # Response serialization schemas
│   │   ├── services/
│   │   │   └── contact_service.py # Database persistence service
│   │   ├── routes/
│   │   │   ├── health.py       # /api/health endpoint
│   │   │   ├── contact.py      # /api/contact form handler
│   │   │   └── portfolio.py    # /api/profile, /projects, /services, /skills
│   │   ├── config.py           # Pydantic BaseSettings & env loader
│   │   └── main.py             # FastAPI instance, CORS, routers & startup
│   ├── requirements.txt        # Backend dependencies
│   ├── test_api.py             # Automated test suite (100% pass rate)
│   └── .env.sample             # Environment configuration template
│
├── .gitignore
└── README.md
```

---

## ⚡ Quick Start & Development

### 1. Prerequisites
- **Node.js** v18+ (tested on v24.22.1)
- **Python** 3.10+ (tested on Python 3.15.1)

---

### 2. Run Backend (FastAPI)
```bash
cd backend

# Install dependencies
python -m pip install -r requirements.txt

# Run automated tests to verify setup
python test_api.py

# Start FastAPI server on port 8000
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```
- Interactive API Docs: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- Health Check: [http://127.0.0.1:8000/api/health](http://127.0.0.1:8000/api/health)

---

### 3. Run Frontend (React + Vite)
```bash
cd frontend

# Install dependencies
npm install

# Start Vite development server on port 5173
npm run dev
```
- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Vite automatically proxies `/api` calls to `http://127.0.0.1:8000`.

---

## 🛠️ Automated Testing & Verification

### Backend Tests
```bash
cd backend
python test_api.py
```
**Test Results:**
- `GET /` — Verified API root and developer identity metadata.
- `GET /api/health` — Verified database connectivity and service health.
- `GET /api/profile` — Verified Gokul J academic and title data.
- `GET /api/skills` — Verified categorized skill sets.
- `GET /api/projects` — Verified all 5 project records with original tech tags.
- `GET /api/services` — Verified all 9 freelance service definitions.
- `GET /api/experience` — Verified GB Tech Corp internship and FITA Academy training.
- `POST /api/contact` — Verified Pydantic validation, client IP logging, and SQLite database storage.

### Frontend Production Build
```bash
cd frontend
npm run build
```
- Generates production-optimized bundle in `frontend/dist/`.

---

## 🌐 Deployed Projects & External Evidence
- **King Sports Club**: [https://sports-club-1.onrender.com](https://sports-club-1.onrender.com)  
  *Sports facility showcase and turf/court booking platform (React.js, Tailwind CSS, Django REST Framework, PostgreSQL).*
- **Magic Box**: [https://magic-box-1.onrender.com](https://magic-box-1.onrender.com)  
  *Curated online gift shop with WhatsApp-based checkout (React.js, Django REST Framework, PostgreSQL, Cloudinary).*

---

## 📄 License & Attribution
Designed and built for **Gokul J** — Full Stack Developer & Freelancer.
