from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr, Field

class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, description="Full name of the sender")
    email: EmailStr = Field(..., description="Valid contact email address")
    service: Optional[str] = Field("General Inquiry", max_length=100, description="Freelance service interested in")
    subject: Optional[str] = Field(None, max_length=200, description="Subject of the message")
    message: str = Field(..., min_length=10, max_length=5000, description="Detailed message or inquiry")

class ContactResponse(BaseModel):
    success: bool
    message: str
    submission_id: Optional[int] = None
    created_at: Optional[datetime] = None
    email_notification: Optional[bool] = None

class ContactRecord(BaseModel):
    id: int
    name: str
    email: str
    service: Optional[str]
    subject: Optional[str]
    message: str
    created_at: datetime

    class Config:
        from_attributes = True
