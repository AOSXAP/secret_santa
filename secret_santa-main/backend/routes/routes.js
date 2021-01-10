var express = require("express");
var router = express.Router();
const firebase = require("firebase");
const { v4: uuidv4 } = require("uuid");
require("firebase/database");
const bodyparser = require("body-parser");
let nodemailer = require("nodemailer");
const confirm = require("../functions/confirm.js");
const sendEmail = require("../functions/sendEmail.js");

router.get("/", (req, res) => {
  res.send("hello");
});

router.use(bodyparser.urlencoded({ extended: true }));
router.use(bodyparser.json());

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "secretSantaSenderbot@gmail.com",
    pass: "FrontendReact",
  },
});


router.post("/access", (req, res, next) => {
    const x = sendEmail(req,res);
    if(x==0) res.redirect(307, '/test');
    else res.redirect(307, '/test');
});

router.post('/mailx', (req, res) => {

  const data = req.body;

  const array = Object.values(data)[0];

  console.log(req.body);

  
  var mailOptions = {
    from: "secretSantaSenderbot@gmail.com",
    to: req.body.email,
    subject: "XDXD",
    text: JSON.stringify(array),
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(200); //update
    }
  });


})


router.get("/err", function (req, res) {
  var results = "err";
  res.send(JSON.stringify(results));
});

router.get("/confirm/:id", (req, res) => {
    confirm(req, res);
});

module.exports = router;