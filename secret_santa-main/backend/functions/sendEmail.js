const firebase = require("firebase");
require("firebase/database");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require('nodemailer');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "secretSantaSenderbot@gmail.com",
    pass: "FrontendReact",
  },
});

const sendEmail = async(req,res) => {
     var ob = req.body;
     const id = uuidv4();

     const searchuser = async() => {
       var x = 0;
       await firebase
         .database()
         .ref("/users/")
         .once("value")
         .then(async(snapshot) => {
           const values =  await Object.values(snapshot.val());
            await values.map((obx) => {
             if (obx.email == ob.email) {
                   x = 1;
                    }
                  }
                );
              }
            )

      return x;
      }

    let x = await searchuser();

    console.log(x);
      
    if(x==1){return 1}
    else{
     function writeUserData() {
       firebase
         .database()
         .ref("users/" + id)
         .set({
           name: ob.message,
           email: ob.email,
           id: id,
           link: `http://localhost:8080/confirm/${id}`,
           confirmed: 0,
         });
     }

     writeUserData();

     var content = `Hello ${ob.message}, this message was sent for registration via Secret_Santa ! Use the link below to confirm your account !!!\n\n http://localhost:8080/confirm/${id}`;

     var mailOptions = {
       from: "secretSantaSenderbot@gmail.com",
       to: `${ob.email}`,
       subject: "XDXD",
       text: content,
     };

     transporter.sendMail(mailOptions, function (error, info) {
       if (error) {
         console.log(error);
       } else {
         res.sendStatus(200); //update
       }
     });

     console.log("success");
     return 0;
    }
}

module.exports = sendEmail;