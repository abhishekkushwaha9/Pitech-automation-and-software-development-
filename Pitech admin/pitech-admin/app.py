import os
import sqlite3
from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify, send_from_directory
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.secret_key = 'pitech_secret_key'  # In production, use a strong random key
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB limit

# Ensure upload directory exists
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

DB_PATH = 'database.db'

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Admin table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS admin (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )
    ''')
    
    # Clients table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS clients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        contact_person TEXT,
        logo_path TEXT
    )
    ''')
    
    # Testimonials table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS testimonials (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        author TEXT NOT NULL,
        content TEXT NOT NULL
    )
    ''')
    
    # Messages table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    ''')
    
    # Create default admin if not exists
    cursor.execute('SELECT * FROM admin WHERE username = ?', ('admin',))
    if not cursor.fetchone():
        hashed_password = generate_password_hash('admin123')
        cursor.execute('INSERT INTO admin (username, password) VALUES (?, ?)', ('admin', hashed_password))
        
        # Add sample data
        cursor.execute('INSERT INTO clients (name, contact_person) VALUES (?, ?)', ('Sample Company', 'John Doe'))
        cursor.execute('INSERT INTO testimonials (author, content) VALUES (?, ?)', 
                       ('Happy Client', 'PiTech provided excellent automation services for our factory lineup.'))
        cursor.execute('INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)',
                       ('Enquiry User', 'enquiry@example.com', '1234567890', 'Looking for a SCADA solution.'))
    
    conn.commit()
    conn.close()

# Initialize DB on first run
init_db()N

# --- Authentication Helpers ---
def is_logged_in():
    return 'admin_id' in session

@app.before_request
def check_auth():
    # List of endpoints that don't require login
    open_endpoints = ['login', 'static', 'api_get_clients', 'api_get_testimonials', 'api_get_messages', 'api_submit_message', 'api_get_images', 'serve_upload']
    if not is_logged_in() and request.endpoint not in open_endpoints and request.endpoint is not None:
        return redirect(url_for('login'))

@app.route('/uploads/<filename>')
def serve_upload(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# --- Routes ---

@app.route('/login', methods=['GET', 'POST'])
def login():
    if is_logged_in():
        return redirect(url_for('dashboard'))
    
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        conn = get_db_connection()
        admin = conn.execute('SELECT * FROM admin WHERE username = ?', (username,)).fetchone()
        conn.close()
        
        if admin and check_password_hash(admin['password'], password):
            session['admin_id'] = admin['id']
            session['username'] = admin['username']
            return redirect(url_for('dashboard'))
        else:
            flash('Invalid username or password', 'error')
            
    return render_template('admin_login.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))

@app.route('/')
@app.route('/dashboard')
def dashboard():
    conn = get_db_connection()
    client_count = conn.execute('SELECT COUNT(*) FROM clients').fetchone()[0]
    testimonial_count = conn.execute('SELECT COUNT(*) FROM testimonials').fetchone()[0]
    message_count = conn.execute('SELECT COUNT(*) FROM messages').fetchone()[0]
    recent_messages = conn.execute('SELECT * FROM messages ORDER BY created_at DESC LIMIT 5').fetchall()
    
    # Get image count
    image_files = os.listdir(app.config['UPLOAD_FOLDER']) if os.path.exists(app.config['UPLOAD_FOLDER']) else []
    image_count = len([f for f in image_files if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg'))])
    
    conn.close()
    return render_template('dashboard.html', 
                           client_count=client_count, 
                           testimonial_count=testimonial_count,
                           message_count=message_count,
                           recent_messages=recent_messages,
                           image_count=image_count)

@app.route('/manage_images')
def manage_images():
    image_files = []
    if os.path.exists(app.config['UPLOAD_FOLDER']):
        files = os.listdir(app.config['UPLOAD_FOLDER'])
        for f in files:
            if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg')):
                image_files.append(f)
    return render_template('manage_images.html', images=image_files)

@app.route('/upload_image', methods=['POST'])
def upload_image():
    file = request.files.get('image')
    if file and file.filename != '':
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        flash('Image uploaded successfully!', 'success')
    return redirect(url_for('manage_images'))

@app.route('/delete_image/<filename>')
def delete_image(filename):
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    if os.path.exists(file_path):
        os.remove(file_path)
        flash('Image deleted successfully!', 'success')
    return redirect(url_for('manage_images'))

# --- Client Management ---

@app.route('/manage_clients')
def manage_clients():
    conn = get_db_connection()
    clients = conn.execute('SELECT * FROM clients').fetchall()
    conn.close()
    return render_template('manage_clients.html', clients=clients)

@app.route('/add_client', methods=['POST'])
def add_client():
    name = request.form['name']
    contact_person = request.form['contact_person']
    file = request.files['logo']
    
    logo_filename = None
    if file and file.filename != '':
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        logo_filename = filename
        
    conn = get_db_connection()
    conn.execute('INSERT INTO clients (name, contact_person, logo_path) VALUES (?, ?, ?)',
                 (name, contact_person, logo_filename))
    conn.commit()
    conn.close()
    flash('Client added successfully!', 'success')
    return redirect(url_for('manage_clients'))

@app.route('/edit_client/<int:id>', methods=['POST'])
def edit_client(id):
    name = request.form['name']
    contact_person = request.form['contact_person']
    file = request.files.get('logo')
    
    conn = get_db_connection()
    if file and file.filename != '':
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        conn.execute('UPDATE clients SET name = ?, contact_person = ?, logo_path = ? WHERE id = ?',
                     (name, contact_person, filename, id))
    else:
        conn.execute('UPDATE clients SET name = ?, contact_person = ? WHERE id = ?',
                     (name, contact_person, id))
    conn.commit()
    conn.close()
    flash('Client updated successfully!', 'success')
    return redirect(url_for('manage_clients'))

@app.route('/delete_client/<int:id>')
def delete_client(id):
    conn = get_db_connection()
    conn.execute('DELETE FROM clients WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    flash('Client deleted successfully!', 'success')
    return redirect(url_for('manage_clients'))

# --- Testimonial Management ---

@app.route('/manage_testimonials')
def manage_testimonials():
    conn = get_db_connection()
    testimonials = conn.execute('SELECT * FROM testimonials').fetchall()
    conn.close()
    return render_template('manage_testimonials.html', testimonials=testimonials)

@app.route('/add_testimonial', methods=['POST'])
def add_testimonial():
    author = request.form['author']
    content = request.form['content']
    
    conn = get_db_connection()
    conn.execute('INSERT INTO testimonials (author, content) VALUES (?, ?)', (author, content))
    conn.commit()
    conn.close()
    flash('Testimonial added successfully!', 'success')
    return redirect(url_for('manage_testimonials'))

@app.route('/edit_testimonial/<int:id>', methods=['POST'])
def edit_testimonial(id):
    author = request.form['author']
    content = request.form['content']
    
    conn = get_db_connection()
    conn.execute('UPDATE testimonials SET author = ?, content = ? WHERE id = ?', (author, content, id))
    conn.commit()
    conn.close()
    flash('Testimonial updated successfully!', 'success')
    return redirect(url_for('manage_testimonials'))

@app.route('/delete_testimonial/<int:id>')
def delete_testimonial(id):
    conn = get_db_connection()
    conn.execute('DELETE FROM testimonials WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    flash('Testimonial deleted successfully!', 'success')
    return redirect(url_for('manage_testimonials'))

# --- Contact Messages ---

@app.route('/view_messages')
def view_messages():
    conn = get_db_connection()
    messages = conn.execute('SELECT * FROM messages ORDER BY created_at DESC').fetchall()
    conn.close()
    return render_template('view_messages.html', messages=messages)

@app.route('/delete_message/<int:id>')
def delete_message(id):
    conn = get_db_connection()
    conn.execute('DELETE FROM messages WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    flash('Message deleted successfully!', 'success')
    return redirect(url_for('view_messages'))

# --- API Endpoints ---

@app.route('/api/clients', methods=['GET'])
def api_get_clients():
    conn = get_db_connection()
    clients = conn.execute('SELECT * FROM clients').fetchall()
    conn.close()
    return jsonify([dict(ix) for ix in clients])

@app.route('/api/testimonials', methods=['GET'])
def api_get_testimonials():
    conn = get_db_connection()
    testimonials = conn.execute('SELECT * FROM testimonials').fetchall()
    conn.close()
    return jsonify([dict(ix) for ix in testimonials])

@app.route('/api/messages', methods=['GET'])
def api_get_messages():
    # Usually admin only, but user asked for API integration for PiTech website to fetch messages?
    # Actually messages are usually submitted BY the website TO the admin panel.
    conn = get_db_connection()
    messages = conn.execute('SELECT * FROM messages').fetchall()
    conn.close()
    return jsonify([dict(ix) for ix in messages])

@app.route('/api/submit_message', methods=['POST'])
def api_submit_message():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    message = data.get('message')
    
    if not name or not email or not message:
        return jsonify({'error': 'Missing required fields'}), 400
    
    conn = get_db_connection()
    conn.execute('INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)',
                 (name, email, phone, message))
    conn.commit()
    conn.close()
    return jsonify({'success': 'Message submitted successfully!'}), 201

@app.route('/api/images', methods=['GET'])
def api_get_images():
    image_files = []
    if os.path.exists(app.config['UPLOAD_FOLDER']):
        files = os.listdir(app.config['UPLOAD_FOLDER'])
        for f in files:
            if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg')):
                image_files.append({
                    'filename': f,
                    'url': f'/static/uploads/{f}'
                })
    return jsonify(image_files)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
