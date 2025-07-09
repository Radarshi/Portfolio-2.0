import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 3000;

dotenv.config();

app.use(cors());
app.use(express.json());


// POST endpoint
app.post('/api/collaborate', async (req, res) => {
  const { name, email, phone, organization, collaboration_area, message } = req.body;

  if (!name || !email || !collaboration_area || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
    const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });


  // Compose email
  const mailOptions = {
    from: '"Collaboration Form" <YOUR_EMAIL@gmail.com>',
    to: process.env.user,
    subject: `New Collaboration Request from ${name}`,
    html: `
      <h2>New Collaboration Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || '-'}</p>
      <p><strong>Organization:</strong> ${organization || '-'}</p>
      <p><strong>Collaboration Area:</strong> ${collaboration_area}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent for ${name}`);

    res.status(200).json({ success: true, message: 'Collaboration request sent to your email!' });
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
