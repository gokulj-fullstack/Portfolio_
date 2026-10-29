"""
Script to test live Gmail SMTP delivery to jgokul823@gmail.com.
Run with: python backend/test_email_connection.py
"""
import os
import sys
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from datetime import datetime
from dotenv import load_dotenv

# Load latest backend/.env
env_file = os.path.join(os.path.dirname(__file__), ".env")
load_dotenv(env_file, override=True)

smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
smtp_port = int(os.getenv("SMTP_PORT", "587"))
smtp_user = os.getenv("SMTP_USER", "jgokul823@gmail.com")
smtp_password = os.getenv("SMTP_PASSWORD", "").strip()
notification_email = os.getenv("NOTIFICATION_EMAIL", "jgokul823@gmail.com")

print("=" * 60)
print(" GOKUL J PORTFOLIO - GMAIL SMTP CONNECTION TEST")
print("=" * 60)
print(f"SMTP Host:          {smtp_host}:{smtp_port}")
print(f"Sender (SMTP User): {smtp_user}")
print(f"Recipient:          {notification_email}")
print(f"SMTP Password set:  {'YES (Length: ' + str(len(smtp_password)) + ')' if smtp_password else 'NO (BLANK)'}")
print("=" * 60)

if not smtp_password:
    print("\n[ERROR] SMTP_PASSWORD is not set in backend/.env!")
    print("\nTo fix this:")
    print("1. Go to https://myaccount.google.com/apppasswords")
    print("2. Make sure 2-Step Verification is turned ON.")
    print("3. Generate a 16-character App Password for 'Portfolio'.")
    print("4. Paste it into backend/.env on line 15: SMTP_PASSWORD=your_16_char_password")
    print("5. Run this test script again!")
    sys.exit(1)

print("\n[1/3] Connecting to Gmail SMTP server (smtp.gmail.com:587)...")
try:
    server = smtplib.SMTP(smtp_host, smtp_port, timeout=15)
    print("      Connected successfully.")
    
    print("[2/3] Starting TLS encryption and authenticating...")
    server.starttls()
    server.login(smtp_user, smtp_password)
    print("      Authenticated successfully with Gmail!")

    print("[3/3] Sending test email to " + notification_email + "...")
    timestamp = datetime.now().strftime("%B %d, %Y at %I:%M %p")
    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"[Test Success] Portfolio Contact Form connected! ({timestamp})"
    msg["From"] = f"Gokul J Portfolio <{smtp_user}>"
    msg["To"] = notification_email
    msg["Reply-To"] = smtp_user

    text_body = f"""Hello Gokul!

Congratulations! Your portfolio contact enquiry form is successfully connected to Gmail SMTP.

When visitors fill out the contact form on your portfolio website, you will receive notifications right here with all their project details and their email set as the reply address.

Test timestamp: {timestamp}
Host: {smtp_host}
User: {smtp_user}
"""

    html_body = f"""<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; background-color: #f7f7f9; padding: 24px; color: #373a3c;">
  <div style="max-width: 540px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #eceeef; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
    <div style="background: linear-gradient(135deg, #ff335f, #ff1447); padding: 20px; color: white;">
      <h2 style="margin: 0;">Portfolio Mailer Connected!</h2>
      <p style="margin: 4px 0 0; opacity: 0.9; font-size: 13px;">Gokul J Portfolio &bull; FastAPI Backend</p>
    </div>
    <div style="padding: 24px;">
      <p style="font-size: 16px; margin-top: 0;">Hello <strong>Gokul</strong>,</p>
      <p>This is a test notification confirming that your portfolio contact form is fully connected to <strong>{notification_email}</strong>.</p>
      <div style="background: #e6fcf5; border-left: 4px solid #10b981; padding: 12px 16px; border-radius: 4px; margin: 16px 0; color: #087f5b;">
        <strong>Status: Active &amp; Verified</strong><br/>
        All incoming visitor inquiries will be sent directly to this Gmail inbox.
      </div>
      <p style="font-size: 13px; color: #818a91;">Sent on {timestamp}</p>
    </div>
  </div>
</body>
</html>"""

    msg.attach(MIMEText(text_body, "plain", "utf-8"))
    msg.attach(MIMEText(html_body, "html", "utf-8"))

    server.send_message(msg)
    server.quit()

    print("\n" + "=" * 60)
    print(" SUCCESS! Test email has been sent to " + notification_email)
    print(" Please check your Gmail inbox (and Spam/Promotions folder just in case).")
    print("=" * 60)

except smtplib.SMTPAuthenticationError as e:
    print(f"\n[AUTHENTICATION ERROR] Gmail rejected the login credentials.")
    print("Details:", str(e))
    print("\nSolution:")
    print("1. Did you use your regular Google password? Google requires an App Password, not your regular password.")
    print("2. Generate a 16-character App Password at: https://myaccount.google.com/apppasswords")
    print("3. Paste the 16 characters into backend/.env (e.g. SMTP_PASSWORD=abcdefghijklmnop)")
except Exception as e:
    print(f"\n[ERROR] An error occurred while connecting or sending: {type(e).__name__}: {str(e)}")

