const fs = require('fs');
const path = require('path');
const Canvas = require('canvas');
const attachmentPath = path.join(__dirname, '../public/images/orderList.png');
const { ids } = require('../global');
const { sendMail } = require('./sendSansiMail');
const { $getIdsDetails } = require('../mongo/index');
const width = 230;
function getLocationOfUser (index, userlist) {
  let x;
  const y = parseInt(index / 2) * 18 + 310;
  const text = [userlist[index]['name'], userlist[index]['phone']];
  if (index % 2 === 0) {
    x = 10;
  } else {
    x = 230;
  }
  return { x, y, text };
}

function getAndSendPng () {
  return $getIdsDetails(userlist => {
    // console.log('BeforeMap', userlist);
    if (userlist.length > 0) {
      userlist.map(item => {
        return [item.name, item.uid];
      });
      //  console.log('AfterMap', userlist);
      fs.readFile(path.join(__dirname, '../public/images/form.png'), function (error, data) {
        if (error) {
          throw error;
        } else {
          const img = new Canvas.Image();
          img.src = data;

          const canvas = new Canvas(img.width * 2, img.height * 2);
          const ctx = canvas.getContext('2d');
          const size = userlist.length;
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, img.width, img.height + 360);

          ctx.drawImage(img, 0, 0, img.width, img.height);
          ctx.font = '24px "Microsoft YaHei"';
          // 设置字体填充颜色
          ctx.fillStyle = 'black';
          ctx.fillText(size, 150, 230);
          ctx.font = '16px "Microsoft YaHei"';
          ctx.fillText(userlist[0]['name'], 120, 265);
          ctx.fillText(userlist[0]['phone'], 120, 290);

          for (let i = 0; i < userlist.length; i++) {
            const locationUser = getLocationOfUser(i, userlist);
            ctx.fillText(locationUser.text, locationUser.x, locationUser.y);
          }
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
    } else {
      return null;
    }
  });
}
exports.getAndSendPng = getAndSendPng;
