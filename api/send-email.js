const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // CORS headers
  const trustedOrigins = (process.env.CORS_ORIGINS || "http://localhost:3000").split(",");
  const origin = req.headers.origin;
  
  if (origin && trustedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else if (!origin) {
    // Allow requests without origin (like some mobile apps or server-to-server)
    res.setHeader('Access-Control-Allow-Origin', '*');
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
  const { firstName, lastName, email, phone, company, designation, subject, message } = req.body;
  const name = req.body.name || (firstName ? `${firstName} ${lastName}`.trim() : 'Anonymous');

  // Validation
  if (!email || !message) {
    console.error("Validation failed: Missing email or message", { email, message });
    return res.status(400).json({ error: "Missing required fields: email and message are mandatory" });
  }

  // Check credentials
  if (!process.env.EMAIL || !process.env.PASSWORD) {
    console.error("CRITICAL ERROR: EMAIL or PASSWORD environment variables are NOT set in Vercel.");
    if (!process.env.EMAIL) console.error("- EMAIL variable is missing");
    if (!process.env.PASSWORD) console.error("- PASSWORD variable is missing");
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    // SMTP Configuration - Using explicit host for better compatibility
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    // Email Options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL}>`,
      to: process.env.EMAIL, // Send to yourself
      replyTo: email,
      subject: `New Contact Form: ${subject || "No Subject"}`,
      text: `
        You have received a new message from your website contact form.

        Details:
        -------------------------
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Company: ${company || 'N/A'}
        Designation: ${designation || 'N/A'}
        Subject: ${subject || 'N/A'}

        Message:
        ${message}
        -------------------------
      `,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Designation:</strong> ${designation || 'N/A'}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <div style="background: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `
    };

    // Send Mail
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    // Success Response
    return res.status(200).json({ success: true, messageId: info.messageId });

  } catch (error) {
    // Error Response
    console.error("Nodemailer Sending Error:", error);
    return res.status(500).json({ 
      error: "Failed to send email", 
      details: error.message,
      code: error.code
    });
  }
}

