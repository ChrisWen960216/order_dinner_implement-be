const hummus = require('hummus');
const path = require('path');
const { $getIdsDetails } = require('../mongo/index');
const { sendMail } = require('./sendSansiMail');
// console.log(hummus);

function getLocationOfUser (index, userlist) {
  let x;
  const y = parseInt(index / 2) * 18 + 570;
  const text = [userlist[index]['name'], userlist[index]['phone']];
  if (index % 2 === 0) {
    x = 15;
  } else {
    x = 200;
  }
  return { x, y, text };
}

function modifyPdf () {
  return $getIdsDetails(userlist => {
    if (userlist.length > 0) {
      userlist.map(item => {
        return [item.name, item.uid];
      });
      var pdfWriter = hummus.createWriterToModify(path.join(__dirname, '../public/images/form.pdf'), {
        modifiedFilePath: path.join(__dirname, '../public/images/output/form.pdf'),
        log: path.join(__dirname, '../log/pdf.log')
      });

      var pageModifier = new hummus.PDFPageModifier(pdfWriter, 0, true);
      function addContext (text, x, y, fontSize) {
        return pageModifier.startContext().getContext().writeText(
          text,
          x, y,
          { font: pdfWriter.getFontForFile(path.join(__dirname, '../simsun.ttc')), size: fontSize, colorspace: 'gray', color: 'black' }
        );
      }
      addContext(userlist.length, 110, 690, 14);
      addContext(userlist[0]['name'], 90, 660, 10);
      addContext(userlist[0]['phone'], 90, 645, 10);

      // 用餐人员名单
      for (let i = 0; i < userlist.length; i++) {
        const locationUser = getLocationOfUser(i, userlist);
        addContext(locationUser.text, locationUser.x, locationUser.y, 9);
      }

      pageModifier.endContext().writePage();
      pdfWriter.end();

      return sendMail();
    } else { return null ; }
  });
}
exports.modifyPdf = modifyPdf;
