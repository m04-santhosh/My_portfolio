import nodemailer from 'nodemailer';

/**
 * Universal Serverless Handler for Portfolio Contact Submissions
 * Compatible with Vercel Serverless Functions and local Vite middleware.
 */
export default async function handler(req, res) {
  // Helper to send JSON responses across different server environments
  const sendResponse = (statusCode, data) => {
    if (res.status && typeof res.status === 'function') {
      return res.status(statusCode).json(data);
    }
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  };

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return sendResponse(405, { success: false, error: 'Method Not Allowed' });
  }

  try {
    // Parse body if it comes as a raw string or stream buffer
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return sendResponse(400, { success: false, error: 'Invalid JSON payload' });
      }
    }

    if (!body || typeof body !== 'object') {
      return sendResponse(400, { success: false, error: 'Missing request body' });
    }

    const { name, email, message, _gotcha } = body;

    // 1. Spam Protection: Honeypot trap check
    // If the hidden '_gotcha' field is filled, silently discard (bot trap)
    if (_gotcha && String(_gotcha).trim().length > 0) {
      console.warn('[Spam Trap] Honeypot field triggered. Discarding submission silently.');
      return sendResponse(200, { success: true, message: 'Message sent successfully.' });
    }

    // 2. Validation: Empty-field check
    const cleanName = (name || '').trim();
    const cleanEmail = (email || '').trim();
    const cleanMessage = (message || '').trim();

    if (!cleanName) {
      return sendResponse(400, { success: false, error: 'Name is required.' });
    }
    if (!cleanEmail) {
      return sendResponse(400, { success: false, error: 'Email address is required.' });
    }
    if (!cleanMessage) {
      return sendResponse(400, { success: false, error: 'Message cannot be empty.' });
    }

    // Length limit checks (prevent abuse/payload bombing)
    if (cleanName.length > 100) {
      return sendResponse(400, { success: false, error: 'Name cannot exceed 100 characters.' });
    }
    if (cleanEmail.length > 150) {
      return sendResponse(400, { success: false, error: 'Email cannot exceed 150 characters.' });
    }
    if (cleanMessage.length < 10) {
      return sendResponse(400, { success: false, error: 'Message must be at least 10 characters long.' });
    }
    if (cleanMessage.length > 5000) {
      return sendResponse(400, { success: false, error: 'Message cannot exceed 5000 characters.' });
    }

    // 3. Validation: Email format regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return sendResponse(400, { success: false, error: 'Please enter a valid email address.' });
    }

    // 4. Determine recipient & credentials
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'santhosh.muruga04@gmail.com';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpSecure = smtpPort === 465;

    let transporter;
    let senderAddress;

    if (smtpUser && smtpPass) {
      // Production credentials configured (e.g. Gmail App Password or custom SMTP)
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });
      senderAddress = `"Portfolio Contact Form" <${smtpUser}>`;
    } else {
      // Development / Testing fallback (Ethereal test mailbox)
      console.log('[Dev/Test Mode] No SMTP_USER and SMTP_PASS detected. Creating ephemeral Ethereal test inbox...');
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      senderAddress = `"Portfolio Contact Form" <${testAccount.user}>`;
    }

    // Exact subject and body format specified in requirements:
    // Subject: New Portfolio Contact — {visitor name}
    // Body:
    // Name:
    // Email:
    // Message:
    const subjectLine = `New Portfolio Contact — ${cleanName}`;
    const plainTextBody = `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`;

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0f1118; color: #f8fafc; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
        <div style="border-bottom: 2px solid #06b6d4; padding-bottom: 12px; margin-bottom: 20px;">
          <h2 style="margin: 0; color: #06b6d4; font-size: 20px;">New Portfolio Contact</h2>
          <span style="font-size: 13px; color: #94a3b8;">Submission from portfolio contact form</span>
        </div>
        
        <p style="margin: 8px 0; font-size: 15px;">
          <strong style="color: #94a3b8;">Name:</strong> <span style="color: #f8fafc;">${cleanName}</span>
        </p>
        <p style="margin: 8px 0; font-size: 15px;">
          <strong style="color: #94a3b8;">Email:</strong> 
          <a href="mailto:${cleanEmail}" style="color: #38bdf8; text-decoration: none;">${cleanEmail}</a>
        </p>

        <div style="margin-top: 20px; padding: 16px; background: rgba(255, 255, 255, 0.04); border-radius: 8px; border-left: 4px solid #06b6d4;">
          <strong style="color: #94a3b8; display: block; margin-bottom: 8px;">Message:</strong>
          <div style="color: #f8fafc; font-size: 14.5px; line-height: 1.6; white-space: pre-wrap;">${cleanMessage}</div>
        </div>

        <div style="margin-top: 24px; padding-top: 14px; border-top: 1px solid rgba(255, 255, 255, 0.08); font-size: 12px; color: #64748b; text-align: center;">
          Sent to ${recipientEmail} • Click 'Reply' to respond directly to ${cleanEmail}
        </div>
      </div>
    `;

    const mailOptions = {
      from: senderAddress,
      to: recipientEmail,
      replyTo: cleanEmail,
      subject: subjectLine,
      text: plainTextBody,
      html: htmlBody,
    };

    const info = await transporter.sendMail(mailOptions);

    let previewUrl = null;
    if (!smtpUser || !smtpPass) {
      previewUrl = nodemailer.getTestMessageUrl(info);
      console.log('[Dev Test Message Sent] Preview URL:', previewUrl);
    }

    return sendResponse(200, {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      previewUrl,
    });
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return sendResponse(500, {
      success: false,
      error: 'Failed to send message. Please try again or email directly at santhosh.muruga04@gmail.com.',
    });
  }
}
