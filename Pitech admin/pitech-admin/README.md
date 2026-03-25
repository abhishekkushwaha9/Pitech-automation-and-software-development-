# PiTech Admin Panel

A secure and professional admin panel built with Flask for managing the PiTech website content.

## Features

- **Secure Authentication:** Username/password protected login.
- **Client Management:** Add, edit, and delete clients with logo uploads.
- **Testimonial Management:** Manage client reviews.
- **Message Center:** View inquiries from the website contact form.
- **Image Gallery:** Upload and manage general website images.
- **API Integration:** Ready-to-use endpoints for fetching data on the frontend.

## Technology Stack

- **Backend:** Python Flask
- **Frontend:** HTML5, CSS3 (Vanilla), JavaScript
- **Database:** SQLite
- **Icons:** Font Awesome

## Project Structure

```
pitech-admin/
├── app.py              # Main Flask application & API routes
├── database.db         # SQLite database (created on first run)
├── requirements.txt    # Python dependencies
├── static/
│   ├── css/            # Stylesheets
│   ├── js/             # Client-side logic
│   └── images/         # Static assets
├── templates/          # HTML templates (Jinja2)
└── uploads/            # User-uploaded images & logos
```

## Getting Started

1. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the Application:**
   ```bash
   python app.py
   ```

3. **Login:**
   - **URL:** `http://127.0.0.1:5000/login`
   - **Default Username:** `admin`
   - **Default Password:** `admin123`
   *(Note: Change these in production)*

## API Endpoints for PiTech Website

- `GET /api/clients`: Returns all clients.
- `GET /api/testimonials`: Returns all testimonials.
- `GET /api/images`: Returns list of uploaded images.
- `POST /api/submit_message`: Submit a new contact form message.
  - Required JSON fields: `name`, `email`, `message`.
  - Optional field: `phone`.

## Security Notes

- The `app.secret_key` in `app.py` should be changed to a random secret string in production.
- Database passwords should be managed securely.
- Ensure the `uploads/` folder has appropriate write permissions.
