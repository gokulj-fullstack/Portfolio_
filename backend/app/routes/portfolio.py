from typing import List
from fastapi import APIRouter
from ..schemas.portfolio import (
    ProfileResponse,
    SkillsResponse,
    ProjectItem,
    ServiceItem,
    ExperienceItem
)

router = APIRouter(prefix="/api", tags=["Portfolio"])

PROFILE_DATA = {
    "name": "Gokul J",
    "role": "Full Stack Developer | Freelancer",
    "headline": "I make modern websites & full-stack web applications.",
    "subheadline": "Full Stack Developer & Freelancer",
    "bio": "Computer Science & Engineering graduate from Tagore Engineering College (Anna University, 2025). Passionate about building modern, high-performance web applications, robust REST APIs, and scalable technology solutions for businesses and individual clients using React.js, Vite, FastAPI, and Django.",
    "location": "Chennai, Tamil Nadu, India 601301",
    "email": "jgokul823@gmail.com",
    "phone": "+91-9080703491",
    "resumeUrl": "/assets/Gokul_J_Resume.pdf",
    "github": "https://github.com",
    "linkedin": "https://linkedin.com",
    "education": {
        "degree": "Bachelor of Engineering (B.E.)",
        "major": "Computer Science and Engineering",
        "institution": "Tagore Engineering College",
        "university": "Anna University",
        "graduationYear": 2025,
        "cgpa": "7.58 / 10",
        "description": "Specialized coursework in Data Structures, Relational Database Systems, Software Engineering, Object-Oriented Programming, and Web Development."
    },
    "professionalGoal": "Build modern websites, full-stack web applications, and technology solutions for businesses and individual clients."
}

SKILLS_DATA = {
    "programmingLanguages": [
        {"name": "Python", "level": "Advanced"},
        {"name": "JavaScript", "level": "Advanced"},
        {"name": "TypeScript", "level": "Intermediate"},
        {"name": "SQL", "level": "Proficient"},
        {"name": "HTML5", "level": "Expert"},
        {"name": "CSS3", "level": "Expert"}
    ],
    "frontend": [
        {"name": "React.js", "tag": "Core Stack", "desc": "Component architecture, Hooks, Context, State Management"},
        {"name": "Vite", "tag": "Tooling", "desc": "Modern build tool, lightning-fast HMR, optimized bundling"},
        {"name": "Tailwind CSS", "tag": "Styling", "desc": "Utility-first modern responsive UI design"},
        {"name": "Bootstrap", "tag": "Framework", "desc": "Responsive grid systems and accessible layout components"},
        {"name": "Responsive Web Design", "tag": "Design", "desc": "Mobile-first, cross-browser compatible, fluid typography"}
    ],
    "backend": [
        {"name": "FastAPI", "tag": "Core Backend", "desc": "High-performance async Python REST APIs with automatic OpenAPI docs"},
        {"name": "Pydantic", "tag": "Validation", "desc": "Data parsing, strict schema validation, type safety"},
        {"name": "REST APIs", "tag": "Architecture", "desc": "RESTful API design, HTTP semantics, JSON payloads, CORS"},
        {"name": "Django & DRF", "tag": "Previous Project Experience", "desc": "Django MVC, Django REST Framework viewsets and serializers"}
    ],
    "databases": [
        {"name": "MySQL", "type": "Relational DB", "desc": "Relational table design, indexes, transactional queries"},
        {"name": "PostgreSQL", "type": "Relational DB", "desc": "Advanced relational modeling, ACID compliance, ORM integration"}
    ],
    "toolsAndPlatforms": [
        {"name": "GitHub", "category": "Version Control", "desc": "Git branching, pull requests, collaboration, CI workflows"},
        {"name": "VS Code", "category": "IDE", "desc": "Debugging, linting, formatting, full-stack development"},
        {"name": "Render", "category": "Cloud Deployment", "desc": "Web service hosting, static site deployment, environment config"},
        {"name": "Cloudinary", "category": "Media Storage", "desc": "Cloud image and media management, asset transformations"}
    ]
}

PROJECTS_DATA = [
    {
        "id": "nexa-fitness-studio",
        "title": "NEXA Fitness Studio",
        "tagline": "Premier 8,000 Sq.Ft Fitness Arena & Athletic Turf Platform",
        "description": "Commercial freelance web application developed for a premier fitness and sports center in Padappai featuring a 3,000 sq ft AC gym, Olympic deadlift platform, and 5,000 sq ft outdoor turf.",
        "originalTechnologies": ["React.js", "Vite", "Modern CSS", "Responsive UI"],
        "primaryTechTags": ["React.js", "Vite", "Responsive Design", "Freelance Client"],
        "liveDemo": "https://www.nexafitnessstudio.com/",
        "hasLiveDemo": True,
        "isClientProject": True,
        "image": "/assets/images/project_nexa_fitness.jpg",
        "features": [
            "3,000 Sq.Ft air-conditioned strength gym with Olympic deadlift platform",
            "5,000 Sq.Ft outdoor training turf and cross-training zones",
            "Dedicated training programs including 6-Month Weight Loss & Women's sessions",
            "Interactive membership lead generation and direct contact conversion"
        ]
    },
    {
        "id": "king-sports-club",
        "title": "King Sports Club",
        "tagline": "Sports Facility Showcase & Turf Booking Platform",
        "description": "A sports facility website that showcases sports facilities and supports turf and badminton booking workflows with real-time slot checking.",
        "originalTechnologies": ["React.js", "Tailwind CSS", "Django REST Framework", "PostgreSQL"],
        "primaryTechTags": ["React.js", "Tailwind CSS", "Django REST Framework", "PostgreSQL"],
        "liveDemo": "https://sports-club-1.onrender.com",
        "hasLiveDemo": True,
        "image": "/assets/images/project_king_sports.jpg",
        "features": [
            "Turf and badminton court reservation workflow",
            "Interactive visual slot selection and scheduling",
            "Sports facility showcase with image galleries",
            "PostgreSQL database for reliable booking transactions"
        ]
    },
    {
        "id": "magic-box",
        "title": "Magic Box",
        "tagline": "Curated Online Gift Shop & Hamper Store",
        "description": "An online gift shop featuring product browsing, product categories, a shopping cart, and WhatsApp-based ordering.",
        "originalTechnologies": ["React.js", "Django REST Framework", "PostgreSQL", "Cloudinary"],
        "primaryTechTags": ["React.js", "Django REST Framework", "PostgreSQL", "Cloudinary"],
        "liveDemo": "https://magic-box-1.onrender.com",
        "hasLiveDemo": True,
        "image": "/assets/images/project_magic_box.jpg",
        "features": [
            "Product catalog organized by occasion and category",
            "Interactive shopping cart drawer with live calculations",
            "One-click direct WhatsApp order dispatch with item summary",
            "Cloudinary integration for optimized product imagery"
        ]
    },
    {
        "id": "ai-legal-doc-analysis",
        "title": "AI Legal Document Analysis",
        "tagline": "Intelligent Legal Contract Review & Risk Assistant",
        "description": "An AI-powered application designed to analyze legal documents and provide useful information through an intelligent assistant.",
        "originalTechnologies": ["Python", "React.js", "Gemini API", "Natural Language Processing", "Vector Database"],
        "primaryTechTags": ["Python", "React.js", "Gemini API", "NLP", "Vector DB"],
        "liveDemo": None,
        "hasLiveDemo": False,
        "image": "/assets/images/project_legal_ai.jpg",
        "features": [
            "Automated clause extraction and contract risk scoring",
            "Intelligent conversational chatbot assistant using Gemini API",
            "Vector semantic search for rapid legal statute matching",
            "Readable breakdown of complex indemnity and liability clauses"
        ]
    },
    {
        "id": "django-bank-system",
        "title": "Django Bank Management System",
        "tagline": "Secure Banking Operations & Account Management",
        "description": "A banking management application demonstrating account management, transaction logging, and core banking operations.",
        "originalTechnologies": ["Python", "Django", "MySQL"],
        "primaryTechTags": ["Python", "Django", "MySQL"],
        "liveDemo": None,
        "hasLiveDemo": False,
        "image": "/assets/images/project_bank_system.jpg",
        "features": [
            "Account creation and customer profile management",
            "Deposit, withdrawal, and fund transfer operations",
            "Comprehensive audit trails and transaction history ledger",
            "Relational integrity and balance constraints in MySQL"
        ]
    },
    {
        "id": "ai-pipeline-generator",
        "title": "AI Pipeline Generator",
        "tagline": "Visual AI Workflow Builder with GitHub Integration",
        "description": "An application designed to help users generate AI pipelines through a web interface and GitHub API integration.",
        "originalTechnologies": ["React.js", "Django", "GitHub API"],
        "primaryTechTags": ["React.js", "Django", "GitHub API"],
        "liveDemo": None,
        "hasLiveDemo": False,
        "image": "/assets/images/project_ai_pipeline.jpg",
        "features": [
            "Interactive visual DAG workflow builder for machine learning stages",
            "Automated pipeline configuration and code generation",
            "Direct GitHub repository integration via GitHub REST API",
            "Modular node library for preprocessing, training, and deployment"
        ]
    }
]

SERVICES_DATA = [
    {
        "id": "business-website",
        "title": "Business Website Development",
        "summary": "Custom corporate and business websites tailored to your brand identity, optimized for conversions, speed, and search engines.",
        "tags": ["Brand Identity", "SEO Optimized", "Mobile Friendly", "Fast Loading"],
        "relevantProject": "NEXA Fitness Studio & King Sports Club"
    },
    {
        "id": "ecommerce-website",
        "title": "E-commerce Website Development",
        "summary": "Custom digital storefronts featuring rich product catalogs, interactive carts, filtered search, and direct WhatsApp or payment checkouts.",
        "tags": ["Product Catalogs", "Cart Workflows", "WhatsApp Checkout", "Cloudinary Media"],
        "relevantProject": "Magic Box"
    },
    {
        "id": "sports-fitness-website",
        "title": "Sports and Fitness Websites",
        "summary": "Dedicated digital platforms for sports arenas, fitness studios, and turf facilities with real-time court booking and schedule displays.",
        "tags": ["Slot Booking", "Arena Showcase", "Timetable Calendars", "Interactive UI"],
        "relevantProject": "NEXA Fitness Studio & King Sports Club"
    },
    {
        "id": "responsive-frontend",
        "title": "Responsive Frontend Development",
        "summary": "Pixel-perfect, fluid web interfaces built using React.js and Vite, ensuring an intuitive user experience on smartphones, tablets, and desktops.",
        "tags": ["React.js", "Vite", "Modern CSS", "Cross-Device"],
        "relevantProject": "NEXA Fitness Studio, King Sports Club & Magic Box"
    },
    {
        "id": "fullstack-web-apps",
        "title": "Full-Stack Web Application Development",
        "summary": "End-to-end web applications seamlessly coupling dynamic React interfaces with high-performance FastAPI backends and relational databases.",
        "tags": ["React + FastAPI", "End-to-End", "Database Driven", "Scalable"],
        "relevantProject": "King Sports Club & Magic Box"
    },
    {
        "id": "rest-api-development",
        "title": "REST API Development",
        "summary": "Clean, secure, and documented RESTful web services developed with FastAPI and Pydantic validation for web and mobile frontends.",
        "tags": ["FastAPI", "Pydantic Models", "OpenAPI / Swagger", "JSON APIs"],
        "relevantProject": "AI Legal Doc & Portfolio Backend"
    },
    {
        "id": "database-integration",
        "title": "Database Integration",
        "summary": "Robust database architecture, relational schema design, query optimization, and ORM integrations using PostgreSQL and MySQL.",
        "tags": ["PostgreSQL", "MySQL", "Schema Design", "ORM Queries"],
        "relevantProject": "Bank Management & Magic Box"
    },
    {
        "id": "deployment-maintenance",
        "title": "Website Deployment and Maintenance",
        "summary": "Reliable cloud deployments on platforms like Render, setting up custom domains, environment variables, SSL certificates, and ongoing updates.",
        "tags": ["Render Hosting", "Git Integration", "SSL / HTTPS", "Zero Downtime"],
        "relevantProject": "Deployed Live Demos"
    },
    {
        "id": "website-improvements",
        "title": "Existing Website Improvements",
        "summary": "Revamp legacy web pages, fix layout bugs, optimize slow loading speeds, modernize tech stacks, and add high-value new features.",
        "tags": ["Code Refactoring", "Performance Audit", "UI Refresh", "Bug Fixing"],
        "relevantProject": "Portfolio Migration"
    }
]

EXPERIENCE_DATA = [
    {
        "type": "Internship",
        "title": "Full Stack Developer Intern",
        "organization": "Aminiod AI",
        "location": "Chennai, India",
        "period": "3 months",
        "summary": "Working as a Full Stack Developer intern, building and maintaining web application features across the React frontend and backend APIs. Developing and integrating REST APIs with responsive user interfaces in a team environment.",
        "skills": ["React.js", "REST APIs", "Full Stack Development", "Team Collaboration"]
    },
    {
        "type": "Internship",
        "title": "Full Stack Developer Intern",
        "organization": "GB Tech Corp",
        "location": "Tambaram, Chennai",
        "period": "2024",
        "summary": "Built a complete user authentication system using React, Django REST Framework, and MySQL, covering registration, login, and protected routes. Developed and consumed REST APIs and connected them to responsive React interfaces. Used Git and GitHub for version control in a team environment.",
        "skills": ["React.js", "Django REST Framework", "MySQL", "User Authentication", "REST APIs", "Git"]
    },
    {
        "type": "Certification & Training",
        "title": "Python Full Stack Development",
        "organization": "FITA Academy",
        "location": "Chennai, Tamil Nadu",
        "period": "Certified",
        "summary": "Completed six months of hands-on professional training in modern full-stack development, mastering Python programming, MySQL database architecture, JavaScript fundamentals, Django MVC framework, and React.js single-page application development.",
        "skills": ["Python", "MySQL", "JavaScript", "Django", "React.js", "REST APIs"]
    }
]

@router.get("/profile", response_model=ProfileResponse)
def get_profile():
    return PROFILE_DATA

@router.get("/skills", response_model=SkillsResponse)
def get_skills():
    return SKILLS_DATA

@router.get("/projects", response_model=List[ProjectItem])
def get_projects():
    return PROJECTS_DATA

@router.get("/services", response_model=List[ServiceItem])
def get_services():
    return SERVICES_DATA

@router.get("/experience", response_model=List[ExperienceItem])
def get_experience():
    return EXPERIENCE_DATA
