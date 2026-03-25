from flask import Flask, request, jsonify
# To run this in production with Gunicorn:
# gunicorn -w 4 app:app
# (-w 4 creates 4 worker processes to handle concurrent requests)

from flask_mail import Mail, Message
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import os
import re
import logging
from dotenv import load_dotenv

# Setup basic logging to prevent dumping traces to users
logging.basicConfig(level=logging.ERROR, format='%(asctime)s - %(levelname)s - %(message)s')

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# Initialize Limiter
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["100 per day", "20 per hour"]
)

# Enable Restricted CORS
trusted_origins = os.environ.get("CORS_ORIGINS", "http://localhost:3000").split(",")
CORS(app, resources={r"/api/*": {"origins": trusted_origins}})

# Configuration for Flask-Mail using Gmail SMTP
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
# Fallback placeholders provided for clarity, but you should set these in your environment
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME', 'yourgmail@gmail.com')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD', 'your-app-password')
app.config['MAIL_DEFAULT_SENDER'] = app.config['MAIL_USERNAME']

mail = Mail(app)

@app.route('/api/contact', methods=['POST'])
@limiter.limit("5 per minute")
def handle_contact():
    data = request.json
    print(f"--- Incoming Contact Form Request ---")
    print(f"Data received: {data}")
    
    # Extract fields from the request
    first_name = data.get('firstName', '')
    last_name = data.get('lastName', '')
    company = data.get('company', '')
    designation = data.get('designation', '')
    phone = data.get('phone', '')
    email = data.get('email', '')
    subject = data.get('subject', '')
    message_content = data.get('message', '')

    # Validate required fields exists and are non-empty strings
    if not all([first_name, last_name, company, designation, phone, email, subject, message_content]):
        return jsonify({"error": "Missing required fields"}), 400

    # Strict Validation
    if len(message_content) > 5000:
        return jsonify({"error": "Message is too long. Limit is 5000 characters."}), 400

    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    if not re.match(email_regex, str(email)):
        return jsonify({"error": "Invalid email format"}), 400

    full_name = f"{first_name} {last_name}"

    try:
        # Construct the email body matching requested format
        email_body = f"""New Contact Form Submission from Pitech Website:

Full Name: {full_name}
Company: {company}
Designation: {designation}
Phone: {phone}
Email: {email}
Subject: {subject}

Message:
{message_content}
"""

        # Recipient email - ensure valid email format
        recipient_email = "Abhishekkushwaha7928@gmail.com"
        
        print(f"Preparing to send email to: {recipient_email}")
        print(f"Using SMTP User: {app.config['MAIL_USERNAME']}")

        # Create and send the message
        # The reply_to ensures you can hit 'Reply' and it goes to the customer's email
        msg = Message(
            subject=f"Website Lead: {subject} - {company}",
            recipients=[recipient_email],
            body=email_body,
            reply_to=email
        )
        
        mail.send(msg)
        print("Email sent successfully!")
        return jsonify({"message": "Email sent successfully"}), 200

    except Exception as e:
        # Mask exception details from the end-user
        logging.error(f"Failed to send email. Exception details: {e}")
        return jsonify({"error": "Internal Server Error. Failed to process request."}), 500

if __name__ == '__main__':
    is_development = os.environ.get("FLASK_ENV", "development") == "development"
    app.run(debug=is_development, port=5000)
