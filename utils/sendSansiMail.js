const nodemailer = require('nodemailer');
const path = require('path');

const attachmentPath = path.join(__dirname, '../public/images/orderList.png');

const transporterConfig = require('../config.json').mail.transporter;
const mailOptionsConfig = require('../config.json').mail.mailOptions;

function sendMail () {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport(transporterConfig);

  // setup email data with unicode symbols
  const mailOptions = {
    'from': mailOptionsConfig.from,
    'to': mailOptionsConfig.to,
    'subject': mailOptionsConfig.subject,
    'text': mailOptionsConfig.text,
    html: '<p><img src="cid:00000001"/></p>',
    attachments: [{
      filename: 'orderList.png',
      path: attachmentPath,
      cid: '00000001'
    }]
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      console.log('Message sent: %s', mailOptionsConfig.to);
    }
  });
}

exports.sendMail = sendMail;
