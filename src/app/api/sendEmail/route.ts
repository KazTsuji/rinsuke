// app/api/send-email/route.ts
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use your own email provider
    auth: {
      user: process.env.EMAIL_USER,  // Your email (use environment variables)
      pass: process.env.EMAIL_PASS,  // Your password (or app password)
    },
  });

  const mailOptions = {
    from: email,
    to: 'y9c.elm4a@gmail.com', // Replace with your email
    subject: `Contact form submission from ${name}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    return new Response('Failed to send email', { status: 500 });
  }
}
