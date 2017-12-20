const nodemailer = require('nodemailer');
const path = require('path');

const attachmentPath = path.join(__dirname, '../public/images/test.png');

function sendMail () {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'mail.sansi.com',
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'sansi\\uid12404', // generated ethereal user
      pass: 'Sansi1280' // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: '"ChrisWen" <wentao@sansi.com>', // sender address
    to: '<wentao@sansi.com>', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body，
    attachments: [{
      filename: 'test.png',
      path: attachmentPath
    }]
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
}

exports.sendMail = sendMail;
