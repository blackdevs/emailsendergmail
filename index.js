const nodemailer = require('nodemailer');

// Create a transporter using your SMTP server details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wezlyco@gmail.com',  // Your Gmail email address
    pass: 'qglidjjpptprzehb'         // Your Gmail password or App password
  }
});

const mailOptions = {
  from: 'wezlyco@gmail.com',   // Sender address
  to: 'sobolica@gmail.com',    // Recipient address
  subject: 'Test Email',
  text: 'This is a test email sent using nodemailer in Node.js.'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
