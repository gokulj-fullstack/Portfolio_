from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Text, DateTime
from .connection import Base

class ContactSubmission(Base):
    __tablename__ = "contact_submissions"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    service = Column(String(100), nullable=True, default="General Inquiry")
    subject = Column(String(200), nullable=True)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    ip_address = Column(String(50), nullable=True)

    def __repr__(self):
        return f"<ContactSubmission id={self.id} name='{self.name}' email='{self.email}'>"
