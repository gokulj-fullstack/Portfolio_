import logging
from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException, Request, status
from sqlalchemy.orm import Session
from ..database.connection import get_db
from ..schemas.contact import ContactCreate, ContactResponse
from ..services.contact_service import ContactService
from ..services.email_service import EmailService

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/contact", tags=["Contact"])

@router.post("", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
def submit_contact(
    payload: ContactCreate,
    request: Request,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    """
    Submit a freelance project inquiry or contact request.
    Validates user input with Pydantic, securely records submission into database,
    and dispatches an email notification to jgokul823@gmail.com.
    """
    client_ip = request.client.host if request.client else None

    try:
        submission = ContactService.create_submission(
            db=db,
            payload=payload,
            ip_address=client_ip
        )

        # Dispatch email notification in background (non-blocking)
        background_tasks.add_task(
            EmailService.send_contact_notification,
            payload=payload,
            submission_id=submission.id
        )

        return ContactResponse(
            success=True,
            message="Thank you! Your inquiry has been delivered successfully. Gokul will get in touch soon.",
            submission_id=submission.id,
            created_at=submission.created_at,
            email_notification=True
        )
    except Exception as e:
        logger.error(f"Failed to process contact submission: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while saving your message. Please try again or email directly."
        )
