const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const Canvas = require('canvas');
// const Image = Canvas.Image;

// const out = fs.createWriteStream(path.join(__dirname, '../public/images/form.png'));
// const stream = canvas.pngStream();

router.get('/', (request, response) => {
  return response.json({ code: 0, payload: 'HAHA' });
});

router.get('/pic', (request, response) => {
  fs.readFile(path.join(__dirname, '../public/images/form.png'), function (error, data) {
    if (error) {
      throw error;
    } else {
      const img = new Canvas.Image();
      img.src = data;

      const canvas = new Canvas(img.width, img.height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width / 1.2, img.height / 1.2);
      const dataUrl = canvas.toDataURL();
      return response.json({ code: 0, payload: dataUrl });
    }
  });
});

module.exports = router;
