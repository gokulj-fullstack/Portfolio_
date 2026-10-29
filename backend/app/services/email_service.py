import html
import logging
import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from datetime import datetime
from typing import Optional
from dotenv import load_dotenv

from ..config import settings
from ..schemas.contact import ContactCreate

logger = logging.getLogger(__name__)

class EmailService:
    @staticmethod
    def send_contact_notification(payload: ContactCreate, submission_id: Optional[int] = None) -> bool:
        """
        Sends an email notification to jgokul823@gmail.com when a new contact inquiry is received.
        Uses Gmail SMTP over TLS with credentials loaded from environment variables.
        """
        # Reload environment variables from backend/.env so new passwords take effect immediately without server restart
        env_file = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), ".env")
        if os.path.exists(env_file):
            load_dotenv(env_file, override=True)

        smtp_host = os.getenv("SMTP_HOST") or settings.SMTP_HOST
        smtp_port = int(os.getenv("SMTP_PORT") or settings.SMTP_PORT)
        smtp_user = os.getenv("SMTP_USER") or settings.SMTP_USER
        smtp_password = (os.getenv("SMTP_PASSWORD") or settings.SMTP_PASSWORD or "").strip()
        smtp_use_tls = (os.getenv("SMTP_USE_TLS") or str(settings.SMTP_USE_TLS)).lower() in ("true", "1", "yes")
        notification_email = os.getenv("NOTIFICATION_EMAIL") or settings.NOTIFICATION_EMAIL

        if not smtp_password:
            logger.warning(
                "SMTP_PASSWORD is not set in backend/.env. Email notification skipped for submission #%s from %s. "
                "To enable live Gmail delivery to %s, set SMTP_PASSWORD in backend/.env with a 16-character Gmail App Password.",
                submission_id or "N/A",
                payload.email,
                notification_email
            )
            return False

        try:
            subject_title = payload.subject.strip() if payload.subject else (payload.service or "General Inquiry")
            subject_header = f"[Portfolio Enquiry] {subject_title} - from {payload.name.strip()}"
            submission_time = datetime.now().strftime("%B %d, %Y at %I:%M %p")

            # Escape user input for safe HTML rendering
            escaped_name = html.escape(payload.name.strip())
            escaped_email = html.escape(payload.email.strip())
            escaped_service = html.escape(payload.service.strip() if payload.service else "General Inquiry")
            escaped_subject = html.escape(payload.subject.strip() if payload.subject else "None")
            escaped_message = html.escape(payload.message.strip()).replace("\n", "<br/>")

            # 1. Plain-text version (fallback)
            plain_text = f"""New Portfolio Contact Inquiry
===============================

From: {payload.name.strip()}
Email: {payload.email.strip()}
Service: {payload.service or 'General Inquiry'}
Subject: {payload.subject or 'None'}
Submission ID: #{submission_id or 'N/A'}
Received: {submission_time}

Message:
----------------------------------------
{payload.message.strip()}
----------------------------------------

Reply directly to this email to respond to {payload.name.strip()} ({payload.email.strip()}).
"""

            # 2. Rich HTML version
            html_content = f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #373a3c;
      background-color: #f7f7f9;
      margin: 0;
      padding: 24px;
    }}
    .email-card {{
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #eceeef;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
    }}
    .email-header {{
      background: linear-gradient(135deg, #ff335f, #ff1447);
      color: #ffffff;
      padding: 24px;
      text-align: left;
    }}
    .email-header h1 {{
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.01em;
    }}
    .email-header p {{
      margin: 4px 0 0;
      font-size: 13px;
      opacity: 0.9;
    }}
    .email-body {{
      padding: 24px;
    }}
    .meta-table {{
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }}
    .meta-table td {{
      padding: 8px 12px;
      border-bottom: 1px solid #f0f0f0;
      font-size: 14px;
    }}
    .meta-table td.label {{
      font-weight: 600;
      color: #818a91;
      width: 130px;
    }}
    .meta-table td.value {{
      color: #373a3c;
      font-weight: 500;
    }}
    .message-box {{
      background: #fdfbf7;
      border-left: 4px solid #ff335f;
      padding: 16px;
      border-radius: 4px;
      font-size: 15px;
      color: #2b2b2b;
      margin: 16px 0 24px;
      white-space: pre-line;
    }}
    .action-btn {{
      display: inline-block;
      background-color: #ff335f;
      color: #ffffff !important;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 14px;
    }}
    .email-footer {{
      border-top: 1px solid #eceeef;
      padding: 16px 24px;
      background: #fdfdfd;
      font-size: 12px;
      color: #818a91;
      text-align: center;
    }}
  </style>
</head>
<body>
  <div class="email-card">
    <div class="email-header">
      <h1>New Portfolio Inquiry</h1>
      <p>Received via Gokul J Portfolio Contact Form on {submission_time}</p>
    </div>
    <div class="email-body">
      <table class="meta-table">
        <tr>
          <td class="label">Sender Name:</td>
          <td class="value"><strong>{escaped_name}</strong></td>
        </tr>
        <tr>
          <td class="label">Sender Email:</td>
          <td class="value"><a href="mailto:{escaped_email}" style="color: #ff335f;">{escaped_email}</a></td>
        </tr>
        <tr>
          <td class="label">Service / Topic:</td>
          <td class="value">{escaped_service}</td>
        </tr>
        <tr>
          <td class="label">Subject:</td>
          <td class="value">{escaped_subject}</td>
        </tr>
        <tr>
          <td class="label">Submission ID:</td>
          <td class="value">#{submission_id or 'N/A'}</td>
        </tr>
      </table>

      <div style="font-weight: 600; font-size: 14px; color: #818a91; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">
        Visitor Message:
      </div>
      <div class="message-box">
        {escaped_message}
      </div>

      <div style="text-align: center; margin: 24px 0 10px;">
        <a href="mailto:{escaped_email}?subject=Re:%20{payload.subject or 'Your%20Inquiry%20to%20Gokul%20J'}" class="action-btn">
          Reply to {escaped_name}
        </a>
      </div>
    </div>
    <div class="email-footer">
      Automated notification sent to {notification_email} from {settings.APP_NAME}.
    </div>
  </div>
</body>
</html>
"""

            # Build MIME message
            msg = MIMEMultipart("alternative")
            msg["Subject"] = subject_header
            msg["From"] = f"{settings.APP_NAME} <{smtp_user}>"
            msg["To"] = notification_email
            msg["Reply-To"] = payload.email.strip()

            msg.attach(MIMEText(plain_text, "plain", "utf-8"))
            msg.attach(MIMEText(html_content, "html", "utf-8"))

            with smtplib.SMTP(smtp_host, smtp_port, timeout=15) as server:
                if smtp_use_tls:
                    server.starttls()
                server.login(smtp_user, smtp_password)
                server.send_message(msg)

            logger.info(
                "Successfully dispatched contact notification email for submission #%s to %s",
                submission_id or "N/A",
                notification_email
            )
            return True

        except smtplib.SMTPAuthenticationError as auth_err:
            logger.error(
                "SMTP Authentication failed for %s. Ensure a valid 16-character Gmail App Password is set in backend/.env: %s",
                smtp_user,
                str(auth_err)
            )
            return False
        except Exception as e:
            logger.error(
                "Failed to send email notification to %s: %s",
                notification_email,
                str(e),
                exc_info=True
            )
            return False

