import logging
from typing import Optional
from sqlalchemy.orm import Session
from ..database.models import ContactSubmission
from ..schemas.contact import ContactCreate

logger = logging.getLogger(__name__)

class ContactService:
    @staticmethod
    def create_submission(db: Session, payload: ContactCreate, ip_address: Optional[str] = None) -> ContactSubmission:
        """
        Validates, logs, and stores a new contact inquiry in the database.
        """
        try:
            submission = ContactSubmission(
                name=payload.name.strip(),
                email=payload.email.strip().lower(),
                service=payload.service.strip() if payload.service else "General Inquiry",
                subject=payload.subject.strip() if payload.subject else None,
                message=payload.message.strip(),
                ip_address=ip_address
            )
            db.add(submission)
            db.commit()
            db.refresh(submission)
            logger.info(f"Saved contact submission #{submission.id} from {submission.email}")
            return submission
        except Exception as e:
            db.rollback()
            logger.error(f"Error saving contact submission: {str(e)}", exc_info=True)
            raise e
