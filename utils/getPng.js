const fs = require('fs');
const path = require('path');
const Canvas = require('canvas');
const attachmentPath = path.join(__dirname, '../public/images/test.png');

function getPng () {
  fs.readFile(path.join(__dirname, '../public/images/form.png'), function (error, data) {
    if (error) {
      throw error;
    } else {
      const img = new Canvas.Image();
      img.src = data;

      const canvas = new Canvas(img.width, img.height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width, img.height);
      ctx.font = '24px Courier New';
      // 设置字体填充颜色
      ctx.fillStyle = 'blue';
      ctx.fillText('卿培', 150, 220);
      ctx.fillText('卿培', 150, 275);
      const dataUrl = canvas.toDataURL();
      const writeData = canvas.toBuffer();
      fs.writeFile(attachmentPath, writeData, error => {
        if (error) {
          return console.log(error);
        }
      });
    }
  });
}
getPng();
// module.exports = getPng;
