const express = require('express');
const path = require("path")
const nodemailer = require("nodemailer")
const bodyParser = require ('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "public")))

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname,"index.html"))
})
app.post("/",function(req,res){

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'EugeneFirman@gmail.com',
          pass: 'e121197ft868eb'
        }
      });
  
      let mailOptions = {
        from: req.body.email,
        to: "EugeneFirman@gmail.com", 
        subject: "From website" ,
        text: req.body.fname + " " + req.body.email + " " + req.body.ftext 
        };
        console.log(req.body.ftext)
    
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    });
    

app.listen(process.env.PORT || 3000)