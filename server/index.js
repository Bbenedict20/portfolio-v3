const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/", router);
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`> Listening on port ${port}`));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});

contactEmail.verify((err) => {
    if (err) {
        console.log(' > Error connecting to email', err);
    } else {
        console.log("> Ready to Send");
    }
});

app.post("/contact", (req, res) => {
    const { name, phone, email, message } = req.body;
    const mail = {
        from: name,
        to: process.env.EMAIL,
        subject: "Contact Form Submission!",
        html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (err) => {
        if (err) {
            res.send('error');
        } else {
            res.send('success');
        }
    });
});