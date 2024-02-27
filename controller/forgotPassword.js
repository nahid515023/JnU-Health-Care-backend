const mongoose = require("mongoose");
const signupSchema = require("../model/signupSchema");
const users = mongoose.model("Signup", signupSchema);
const nodemailer = require("nodemailer");
const Pin = require("../model/forgotPass");
require("dotenv").config();


const forgotPass = async (req, res) => {
    try {
        const { email } = req.body;
        console.log(email);
        const user = await users.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate 4-digit pin
        const pin = Math.floor(1000 + Math.random() * 9000);

        // Construct email message with the pin
        const message = `Your verification code is: ${pin}. Please use this code to reset your password.`;

        // Send email with the pin
        await sendEmail(user.name, user.email, "Password Reset Verification Code", message);

        const setPin = new Pin();
        setPin.userId = user._id;
        setPin.email = user.email;
        setPin.pin = pin;
        await setPin.save();

        console.log(user);

        res.status(200).json({ message: '4 Digit code sent to your email!', email: user.email });
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const sendEmail = async (user, email, subject, message) => {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });

    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: subject,
        html: `
            <p>Dear ${user},</p>
            <p>${message}</p>
            <p>If you didn't request this code, please ignore this email.</p>
            <p>Best regards,<br>JnU Counseling Center</p>
        `,
    });
};


const checkPin = async (req, res) => {
    try {
        const { email, pin } = req.body;

        const getPin = await Pin.findOne({ email });



        if (!getPin) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the provided pin matches the stored pin
        if (getPin.pin === pin) {
            const id = getPin.userId.toString();
            await Pin.findOneAndDelete({ email });
            return res.status(200).json({ message: 'PIN verified successfully', id });
        } else {
            return res.status(400).json({ message: 'Invalid PIN' });
        }
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const cngPassword = async (req, res) => {
    try {
        const { id,newPassword } = req.body;
        if (!newPassword) {
            return res
                .status(400)
                .json({ message: "New passwords are required" });
        }
        const user = await users.findOne({ _id: id });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.password = newPassword;
        await user.save();
        res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
        console.error("Error changing password:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};



module.exports = { forgotPass, checkPin,cngPassword }; 
