const nodemailer = require('nodemailer');

async function getBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      try { resolve(JSON.parse(body)); } 
      catch (e) { reject(e); }
    });
  });
}

module.exports = async (req, res) => {
  // CORS setup
  const trustedOrigins = (process.env.CORS_ORIGINS || "http://localhost:3000").split(",");
  const origin = req.headers.origin;
  
  if (trustedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: "Method not allowed" });

  try {
    const data = await getBody(req).catch(() => req.body);
    
    // Support both short form (name) and detailed form attributes
    const email = data.email || '';
    const message = data.message || '';
    const name = data.name || (data.firstName ? `${data.firstName} ${data.lastName}`.trim() : '').trim();
    
    // 1. Validation: Ensure required fields are filled
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields: name, email, or message" });
    }

    // 2. Spam Prevention: Check for excessive links or massive payloads
    if (message.length > 5000) {
      return res.status(400).json({ error: "Message is too long. Limit is 5000 characters." });
    }
    const urlCount = (message.match(/https?:\/\//g) || []).length;
    if (urlCount > 3) {
      return res.status(400).json({ error: "Message contains too many URLs. Suspected spam." });
    }

    // 3. Email format validation
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailRegex.test(String(email))) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // 4. Construct Email Content
    const emailBody = `New Contact Form Submission:

Name: ${name}
Email: ${email}
${data.phone ? `Phone: ${data.phone}\n` : ''}${data.company ? `Company: ${data.company}\n` : ''}${data.designation ? `Designation: ${data.designation}\n` : ''}${data.subject ? `Subject: ${data.subject}\n` : ''}
Message:
${message}
`;

    // 5. Config Nodemailer
    const recipientEmail = "Abhishekkushwaha7928@gmail.com";
    const smtpUser = process.env.MAIL_USERNAME || process.env.EMAIL_USER;
    const smtpPass = process.env.MAIL_PASSWORD || process.env.EMAIL_PASS;

    if (!smtpUser || !smtpPass) {
      console.error("Server SMTP configuration missing in Environment Variables");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: smtpUser, pass: smtpPass },
    });

    const mailOptions = {
      from: `"${name}" <${smtpUser}>`, // Use SMTP User as sender to avoid DMARC spam rules
      to: recipientEmail,
      subject: `Website Lead: ${data.subject || 'New Message'} from ${name}`,
      text: emailBody,
      replyTo: email
    };

    await transporter.sendMail(mailOptions);
    console.log("Contact Email sent successfully to", recipientEmail);
    
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email. Exception details:", error);
    return res.status(500).json({ error: "Internal Server Error. Failed to process request." });
  }
};
