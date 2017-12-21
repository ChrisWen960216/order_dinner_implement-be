const nodemailer = require('nodemailer');
const path = require('path');

const attachmentPath = path.join(__dirname, '../public/images/orderList.png');

nodemailer.createTestAccount((error, account) => {
  if (error) {
    return console.log(error);
  }
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'QQ',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '957638221@qq.com', // generated ethereal user
      pass: 'feiehomqbctobbbd' // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: '"ChrisWen" <957638221@qq.com>', // sender address
    to: '<chriswen96@163.com>', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body，
    attachments: [{
      filename: 'orderList.png',
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
})
;
