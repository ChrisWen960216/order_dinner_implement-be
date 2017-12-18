const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const Canvas = require('canvas');

// router.get('/', (request, response) => {
//   return response.json({ code: 0, payload: 'HAHA' });
// });

router.get('/', (request, response) => {
  fs.readFile(path.join(__dirname, '../public/images/form.png'), function (error, data) {
    if (error) {
      throw error;
    } else {
      const img = new Canvas.Image();
      img.src = data;

      const canvas = new Canvas(img.width, img.height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width, img.height);
      ctx.font = '30px Courier New';
      // 设置字体填充颜色
      ctx.fillStyle = 'blue';
      // 从坐标点(50,50)开始绘制文字
      // ctx.fillText('卿培', 500, 470);
      ctx.fillText('卿培', 600, 470);
      ctx.fillText('卿培', 250, 470);
      const dataUrl = canvas.toDataURL();
      return response.json({ code: 0, payload: dataUrl });
    }
  });
});

module.exports = router;
