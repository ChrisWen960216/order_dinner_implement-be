const fs = require('fs');
const path = require('path');
const Canvas = require('canvas');
const attachmentPath = path.join(__dirname, '../public/images/test.png');
const { ids } = require('../global');
const { sendMail } = require('./sendSansiMail');

function getAndSendPng () {
  fs.readFile(path.join(__dirname, '../public/images/form.png'), function (error, data) {
    if (error) {
      throw error;
    } else {
      const img = new Canvas.Image();
      img.src = data;

      const canvas = new Canvas(img.width, img.height);
      const ctx = canvas.getContext('2d');
      const size = ids.size;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      ctx.font = '24px Courier New';
      // 设置字体填充颜色
      ctx.fillStyle = 'black';
      ctx.fillText(size, 150, 230);
      ctx.fillText('卿培', 150, 275);
      const dataUrl = canvas.toDataURL();
      const writeData = canvas.toBuffer();
      fs.writeFile(attachmentPath, writeData, error => {
        if (error) {
          return console.log(error);
        } else {
          return sendMail();
        }
      });
    }
  });
}
exports.getAndSendPng = getAndSendPng;
