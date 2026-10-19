const nodemailer = require('nodemailer');
try {
  require('dotenv').config();
} catch (_) {}

async function handler(req, res) {
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
  const { firstName, lastName, email, phone, company, designation, subject, message, type, position, areaOfInterest, resumeLink } = req.body;
  const name = req.body.name || (firstName ? `${firstName} ${lastName}`.trim() : 'Anonymous');
  const isJobApp = type === 'job-application' || Boolean(resumeLink) || Boolean(position);
  const finalMessage = message || (isJobApp ? `Job application for ${position || 'Open Role'}` : '');

  // Validation
  if (!email || (!finalMessage && !resumeLink)) {
    console.error("Validation failed: Missing email or message/resumeLink", { email, message, resumeLink });
    return res.status(400).json({ error: "Missing required fields: email and message are mandatory" });
  }

  // Check credentials strictly from environment variables (.env)
  const emailUser = process.env.EMAIL || process.env.MAIL_USERNAME;
  const emailPass = process.env.PASSWORD || process.env.MAIL_PASSWORD;
  if (!emailUser || !emailPass) {
    console.error("CRITICAL ERROR: EMAIL or PASSWORD environment variables are NOT set.");
    if (!emailUser) console.error("- EMAIL variable is missing");
    if (!emailPass) console.error("- PASSWORD variable is missing");
    return res.status(500).json({ error: "Server configuration error: missing credentials in environment" });
  }

  try {
    // SMTP Configuration
    // Previous Gmail configuration:
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: process.env.EMAIL,
    //     pass: process.env.PASSWORD
    //   }
    // });
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail1297.mailasp.net",
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465,
      secure: process.env.SMTP_SECURE !== undefined ? process.env.SMTP_SECURE === 'true' : true,
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    // Email Options - Direct all contact and job inquiries to configured COMPANY_EMAIL or EMAIL from environment
    // Previous recipient:
    // to: process.env.COMPANY_EMAIL || "info@pitechautomation.com", // Delivered to company email
    // to: "Abhishekkushwaha7928@gmail.com",
    const targetRecipient = process.env.COMPANY_EMAIL || emailUser;

    const emailSubject = isJobApp
      ? `New Job Application: ${position || "Career Opportunity"} - ${name}`
      : `New Contact Form: ${subject || "No Subject"}`;

    const textBody = isJobApp
      ? `
        You have received a new job application.

        Details:
        -------------------------
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Position: ${position || 'N/A'}
        Area of Interest: ${areaOfInterest || 'N/A'}
        Resume Link: ${resumeLink || 'N/A'}

        Applicant Message:
        ${message || 'N/A'}
        -------------------------
      `
      : `
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
        ${message || 'N/A'}
        -------------------------
      `;

    const htmlBody = isJobApp
      ? `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Job Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Position:</strong> ${position || 'N/A'}</p>
          <p><strong>Area of Interest:</strong> ${areaOfInterest || 'N/A'}</p>
          <p><strong>Resume Link:</strong> <a href="${resumeLink}" target="_blank" rel="noopener noreferrer">${resumeLink || 'N/A'}</a></p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Applicant Message:</strong></p>
          <div style="background: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
            ${(message || 'No additional message provided.').replace(/\n/g, '<br>')}
          </div>
        </div>
      `
      : `
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
            ${(message || '').replace(/\n/g, '<br>')}
          </div>
        </div>
      `;

    const mailOptions = {
      from: `"${name}" <${emailUser}>`,
      to: targetRecipient,
      replyTo: email,
      subject: emailSubject,
      text: textBody,
      html: htmlBody
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

module.exports = handler;
module.exports.default = handler;


