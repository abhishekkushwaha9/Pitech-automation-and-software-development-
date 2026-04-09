const nodemailer = require('nodemailer');

// Helper to parse JSON from body if request is sent as raw text or standard JSON
async function getBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        reject(e);
      }
    });
  });
}

module.exports = async (req, res) => {
  // CORS setup for serverless function
  const trustedOrigins = (process.env.CORS_ORIGINS || "http://localhost:3000").split(",");
  const origin = req.headers.origin;
  
  if (trustedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = await getBody(req).catch(() => req.body);
    console.log("--- Incoming Contact Form Request ---");
    
    const {
      firstName = '',
      lastName = '',
      company = '',
      designation = '',
      phone = '',
      email = '',
      subject = '',
      message = ''
    } = data || {};

    // Validate required fields
    if (!firstName || !lastName || !company || !designation || !phone || !email || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Strict Validation
    if (message.length > 5000) {
      return res.status(400).json({ error: "Message is too long. Limit is 5000 characters." });
    }

    // Email regex validation
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailRegex.test(String(email))) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const fullName = `${firstName} ${lastName}`;

    const emailBody = `New Contact Form Submission from Pitech Website:

Full Name: ${fullName}
Company: ${company}
Designation: ${designation}
Phone: ${phone}
Email: ${email}
Subject: ${subject}

Message:
${message}
`;

    const recipientEmail = "Abhishekkushwaha7928@gmail.com";
    const smtpUser = process.env.MAIL_USERNAME;
    const smtpPass = process.env.MAIL_PASSWORD;

    if (!smtpUser || !smtpPass) {
      console.error("Missing SMTP credentials in Environment Variables");
      return res.status(500).json({ error: "Server configuration error" });
    }

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: smtpUser,
      to: recipientEmail,
      subject: `Website Lead: ${subject} - ${company}`,
      text: emailBody,
      replyTo: email
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    
    return res.status(200).json({ message: "Email sent successfully" });

  } catch (error) {
    console.error("Failed to send email. Exception details:", error);
    return res.status(500).json({ error: "Internal Server Error. Failed to process request." });
  }
};
