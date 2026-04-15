const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // CORS headers
  const trustedOrigins = (process.env.CORS_ORIGINS || "http://localhost:3000").split(",");
  const origin = req.headers.origin;
  
  if (trustedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Debug log for incoming body
  console.log("--- New Email Request ---");
  console.log("Request Body:", req.body);

  // Extract form data
  // Note: Handle both direct fields and nested fields from the previous complex form if needed
  const name = req.body.name || (req.body.firstName ? `${req.body.firstName} ${req.body.lastName}` : '');
  const email = req.body.email;
  const message = req.body.message;

  // Validation
  if (!name || !email || !message) {
    console.error("Validation failed: Missing fields", { name, email, message });
    return res.status(400).json({ error: "Missing required fields: name, email, or message" });
  }

  // Check credentials
  if (!process.env.EMAIL || !process.env.PASSWORD) {
    console.error("Missing EMAIL or PASSWORD environment variables");
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    // SMTP Configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    // Email Options
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Contact Form Message",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    // Send Mail
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);

    // Success Response
    return res.status(200).json({ success: true });

  } catch (error) {
    // Error Response
    console.error("Nodemailer Sending Error:", error);
    return res.status(500).json({ error: error.message });
  }
}
