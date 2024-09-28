const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fourleafcloverbackend@gmail.com',
    pass: 'pnwx eijm xzmh qcem',
  },
});

app.post('/send-email', (req, res) => {
  const { type } = req.body;

  switch (type) {
    default:
      handleGeneralInquiry(req.body, res);
  }
});

function handleGeneralInquiry(formData, res) {
  const { name, contact, email, message } = formData;

  const mailOptions = {
    from: email,
    to: 'shresthaaaryan123@gmail.com',
    subject: 'General Feedback',
    text: `Name: ${name}\nContact: ${contact}\nEmail: ${email}\nMessage: ${message}`,
  };

  sendEmail(mailOptions, res);
}

function sendEmail(mailOptions, res) {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Internal server error');
    } else {
      console.log('Email sent successfully:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});