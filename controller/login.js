const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signupSchema = require("../model/signupSchema");
const SignupModel = mongoose.model("Signup", signupSchema);
require("dotenv").config();
const loginData = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email);
  try {
    const user = await SignupModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid Email!" });
    }
    if (!user.verified) {
      return res.status(401).json({ error: "you are not a verified user!" });
    }    
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid Password!" });
    }
    const id = user._id;
    const token = jwt.sign({ userId: id }, process.env.JWT_SECRET, {
      expiresIn: "5d",
    });
    res.status(200).json({ message: "Login successful", token, id });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = loginData;
