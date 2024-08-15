// pages/api/sendEmail.js
import { render } from '@react-email/components';
import sendgrid from '@sendgrid/mail';
import EmailTemplate from '../email';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY); // Use environment variable for API key

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, subject, msg } = req.body;

      const emailHtml = render(<EmailTemplate name={name} email={email} phone={phone} subject={subject} message={msg} />);


      const options = {
        from: email,
        to: 'vesif46228@givehit.com',
        subject: subject,
        html: emailHtml,
      };

      await sendgrid.send(options);
      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
