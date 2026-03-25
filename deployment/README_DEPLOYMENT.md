# Pitech Automation - Production Deployment Guide

This guide ensures your React + Flask project is correctly hosted on a VPS using Nginx and Gunicorn.

## 1. Prerequisites
- A Linux VPS (Ubuntu/Debian recommended)
- A registered domain (`pitechautomation.com`)
- Python 3 and Node.js installed on the server

## 2. Setting Up the Backend (Flask)
1. Copy the `backend` folder to `/var/www/pitech-website/backend`.
2. Create a virtual environment:
   ```bash
   cd /var/www/pitech-website/backend
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```
3. Run with Gunicorn using the config provided:
   ```bash
   # Use the config file from deployment folder
   gunicorn -c ../deployment/gunicorn_config.py app:app
   ```
   *Tip: Use Systemd to manage Gunicorn as a service.*

## 3. Setting Up the Frontend (React)
1. On your local machine, run:
   ```bash
   npm run build
   ```
2. Upload the contents of the `build` folder to `/var/www/pitech-website/build`.

## 4. Configuring Nginx
1. Move the `deployment/nginx.conf` to `/etc/nginx/sites-available/pitech`.
2. Create a symbolic link:
   ```bash
   ln -s /etc/nginx/sites-available/pitech /etc/nginx/sites-enabled/
   ```
3. Test and restart Nginx:
   ```bash
   nginx -t
   sudo systemctl restart nginx
   ```

## 5. Handling Routes (React Router)
The `nginx.conf` includes the `try_files $uri $uri/ /index.html;` directive. This ensures that direct visits to routes like `/industries` are handled by React's `index.html` instead of returning a 404.

## 6. SSL (HTTPS)
Use Certbot to secure your domain:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d pitechautomation.com -d www.pitechautomation.com
```
