// pages/api/send-email.js

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, html } = req.body;

    const msg = {
      to,
      from: 'Support@strykefitlife.com', // Your verified sender email
      subject,
      html,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to send email', error });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
