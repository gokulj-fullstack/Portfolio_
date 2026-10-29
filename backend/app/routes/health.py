from datetime import datetime, timezone
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import text
from ..database.connection import get_db

router = APIRouter(prefix="/api/health", tags=["Health"])

@router.get("", status_code=status.HTTP_200_OK)
def health_check(db: Session = Depends(get_db)):
    """
    Application and database connectivity health check.
    """
    db_status = "connected"
    try:
        db.execute(text("SELECT 1"))
    except Exception as e:
        db_status = f"unhealthy: {str(e)}"
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail={"status": "error", "database": db_status}
        )

    return {
        "status": "healthy",
        "service": "Gokul J Portfolio API",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "database": db_status,
        "environment": "active"
    }
