// const Koa = require('koa');
// const app = new Koa();

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');


// var transport = nodemailer.createTransport({
var transport = {
  host: 'smtp.mailtrap.io', // Don’t forget to replace with the SMTP host of your provider
  port: 2525,
  auth: {
    user: "e52f639e24bb03",
    pass: "889fb21aba745b"
    // user: creds.USER,
    // pass: creds.PASS
  }
};

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log("==========");
    console.log(error);
  }
  else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `
  console.log("=##############");
  console.log(content);

  var mail = {
    from: name,
    to: 'hwangij@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log("FAIL ERROR")
      console.log(err);
      res.json({
        status: 'fail'
      })
    }
    else {
      console.log("SUCCESS")
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', router)

app.listen(3002)
