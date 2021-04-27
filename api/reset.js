// @ts-nocheck
const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const crypto = require("crypto");
const baseUrl = require("../utils/baseUrl");
const isEmail = require("validator/lib/isEmail");
const options = {
  auth: {
    api_key: process.env.sendGrid_api,
  },
};

const transporter = nodemailer.createTransport(sendGridTransport(options));

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!isEmail(email)) {
      return res.status(401).send("Invalid Email");
    }

    const user = await UserModel.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const token = crypto.randomBytes(32).toString("hex");

    user.resetToken = token;
    user.expireToken = Date.now() + 3600000;

    await user.save();

    const href = `${baseUrl}/reset/${token}`;

    const mailOptions = {
      to: user.email,
      from: "no.reply.halamadrid@gmail.com ",
      subject: "Chào bạn! Yêu cầu đặt lại mật khẩu",
      html: `<p>Hey ${user.name
        .split(" ")[0]
        .toString()}, Đã có một yêu cầu đặt lại mật khẩu. <a href=${href}>Nhấp vào liên kết này để đặt lại mật khẩu </a>   </p>
      <p>Mã thông báo này chỉ có giá trị trong 1 giờ.</p>`,
    };

    transporter.sendMail(mailOptions, (err, info) => err && console.log(err));

    return res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});

router.post("/token", async (req, res) => {
  try {
    const { token, password } = req.body;

    if (!token) {
      return res.status(401).send("Unauthorized");
    }

    if (password.length < 6)
      return res.status(401).send("Mật khẩu phải ít nhất 6 kí tự");

    const user = await UserModel.findOne({ resetToken: token });

    if (!user) {
      return res.status(404).send("User not found");
    }

    if (Date.now() > user.expireToken) {
      return res.status(401).send("Mã thông báo hết hạn. Tạo mã mới");
    }

    user.password = await bcrypt.hash(password, 10);

    user.resetToken = "";
    user.expireToken = undefined;

    await user.save();

    return res.status(200).send("Password updated");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
