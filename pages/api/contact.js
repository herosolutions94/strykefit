// pages/api/contact.js
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, subject, msg } = req.body;

    try {
      await sendgrid.send({
        to: "info@strykefit.com", // Your email where you want to receive the emails
        from: email, // Use the email address from the form
        subject: `Contact Form Submission: ${subject}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${msg}</p>
        `,
      });

      res.status(200).json({ message: "Succefully submited. Email sent successfully!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
