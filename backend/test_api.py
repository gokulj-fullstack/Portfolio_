"""
Automated Test Suite for Gokul J Portfolio FastAPI Backend
"""
import sys
from fastapi.testclient import TestClient
from app.main import app
from app.database.connection import engine, Base, SessionLocal
from app.database.models import ContactSubmission

# Ensure database tables exist
Base.metadata.create_all(bind=engine)

client = TestClient(app)

def test_root_endpoint():
    response = client.get("/")
    assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    data = response.json()
    assert data["developer"] == "Gokul J"
    assert "docs" in data
    print("PASS: Root endpoint (/) verified")

def test_health_endpoint():
    response = client.get("/api/health")
    assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    data = response.json()
    assert data["status"] == "healthy"
    assert data["database"] == "connected"
    print("PASS: Health check (/api/health) verified")

def test_portfolio_profile():
    response = client.get("/api/profile")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Gokul J"
    assert "Tagore Engineering College" in data["education"]["institution"]
    assert data["education"]["graduationYear"] == 2025
    print("PASS: Profile endpoint (/api/profile) verified")

def test_portfolio_skills():
    response = client.get("/api/skills")
    assert response.status_code == 200
    data = response.json()
    assert "programmingLanguages" in data
    assert "frontend" in data
    assert "backend" in data
    print("PASS: Skills endpoint (/api/skills) verified")

def test_portfolio_projects():
    response = client.get("/api/projects")
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 6
    titles = [p["title"] for p in data]
    assert "NEXA Fitness Studio" in titles
    assert "King Sports Club" in titles
    assert "Magic Box" in titles
    assert "AI Legal Document Analysis" in titles
    assert "Django Bank Management System" in titles
    assert "AI Pipeline Generator" in titles
    print("PASS: Projects endpoint (/api/projects) verified (6 projects)")

def test_portfolio_services():
    response = client.get("/api/services")
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 9
    print("PASS: Services endpoint (/api/services) verified (9 freelance services)")

def test_portfolio_experience():
    response = client.get("/api/experience")
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 2
    orgs = [item["organization"] for item in data]
    assert "GB Tech Corp" in orgs
    assert "FITA Academy" in orgs
    print("PASS: Experience & training endpoint (/api/experience) verified")

def test_contact_submission_success():
    payload = {
        "name": "Sarah Jenkins",
        "email": "sarah.jenkins@example.com",
        "service": "Business Website Development",
        "subject": "New Corporate Website Project",
        "message": "Hi Gokul, we would like to hire you to build our corporate website with React and FastAPI."
    }
    response = client.post("/api/contact", json=payload)
    assert response.status_code == 201, f"Expected 201, got {response.status_code}: {response.text}"
    data = response.json()
    assert data["success"] is True
    assert "submission_id" in data
    print("PASS: Contact submission successfully created and stored")

def test_contact_submission_validation_error():
    # Test invalid email and too short message
    invalid_payload = {
        "name": "A", # too short
        "email": "not-an-email",
        "message": "short" # less than 10 chars
    }
    response = client.post("/api/contact", json=invalid_payload)
    assert response.status_code == 422, f"Expected 422, got {response.status_code}"
    data = response.json()
    assert data["success"] is False
    assert len(data["detail"]) > 0
    print("PASS: Contact submission validation correctly rejects invalid inputs")

if __name__ == "__main__":
    print("Running FastAPI backend automated test suite...")
    test_root_endpoint()
    test_health_endpoint()
    test_portfolio_profile()
    test_portfolio_skills()
    test_portfolio_projects()
    test_portfolio_services()
    test_portfolio_experience()
    test_contact_submission_success()
    test_contact_submission_validation_error()
    print("\nALL FASTAPI TESTS PASSED SUCCESSFULLY! 100% SUCCESS.")
