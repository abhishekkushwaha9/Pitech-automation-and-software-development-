# Deploying Node.js Backend to Vercel

The backend has been converted from Python (Flask) to Node.js (Serverless Functions) and is now located in the `/api` folder.

## Prerequisites
- A Vercel account.
- Vercel CLI installed (`npm i -g vercel`) - *optional but recommended*.

## Steps to Deploy

### 1. Environment Variables
Ensure you set the following Environment Variables in your Vercel Project Dashboard:
- `MAIL_USERNAME`: `Abhishekkushwaha7928@gmail.com`
- `MAIL_PASSWORD`: `wtgo vytn tige ctjw`
- `CORS_ORIGINS`: `https://your-domain.com,http://localhost:3000`

### 2. Local Testing
To test the backend locally:
1. Initialize dependencies: `npm install`
2. Run with Vercel Dev: `vercel dev`
3. Send a POST request to `http://localhost:3000/api/contact`.

### 3. Deployment
Run the following command in the root directory:
```bash
vercel --prod
```

## Folder Structure
- `/api/contact.js`: The legacy Python `/api/contact` route.
- `package.json`: Updated with `nodemailer`.
- `vercel.json`: Configuration for routing.

## Benefits
- **Performance**: Faster cold starts compared to Python.
- **Cost**: Integrated into your existing Vercel project (no separate backend hosting).
- **Scalability**: Automatically scales with your traffic.
