import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import express from "express";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export const feedback = async (req, res) => {
  const { name, phoneNumber, designTasks, email, companyName } = req.body;

  try {
    // if (!name || !phoneNumber || !designTasks || !email || !companyName) {
    //   return res.status(400).json("All fields Required");
    // }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let mailOptions = {
      from: `${email}`,
      to: "gurunivash348@gmail.com",
      subject: "Got a feedback from " + name,

      html: `<h2>Got a message</h2>
    <h3>From:${name}</h3>
    <p>${phoneNumber}</p>
    <p>${designTasks}</p>
    <p>${email}</p>
    <p>${companyName}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json("Feedback Send Succesfully");
  } catch (error) {
    console.log(error);
  }
};
