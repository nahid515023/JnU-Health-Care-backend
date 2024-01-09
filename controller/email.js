const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (user,email, subject, link) => {

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  let info = await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: subject,
    html: `
    <p>Dear ${user},</p>
    <p>Thank you for signing up with JnU Counceling Center. To complete the registration process and verify your account, please click on the following link:</p>
    <p><a href="${link}">Click Here to Verify Your Account</a></p>
    <p>If the above link does not work, you can copy and paste the following URL into your browser's address bar:</p>
    <p>${link}</p>
    <p>Thank you for registration. If you did not create an account, please ignore this email.</p>
    <p>Best regards,<br>JnU Counceling Center</p>
  `,
  });
};

module.exports = sendEmail;
