const nodemailer = require('nodemailer');
const path = require('path');

const attachmentPath = path.join(__dirname, '../public/images/orderList.png');

function sendMail () {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'mail.sansi.com',
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'sansi\\uid12404',
      pass: 'Sansi1280'
    }
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: '"ChrisWen" <wentao@sansi.com>',
    to: '<wentao@sansi.com>',
    subject: '软件研究所今日订餐人员名单',
    text: '软件研究所今日订餐人员名单',
    html: '<b>软件研究所今日订餐人员名单</b>',
    attachments: [{
      filename: 'orderList.png',
      path: attachmentPath
    }]
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
  });
}

exports.sendMail = sendMail;
