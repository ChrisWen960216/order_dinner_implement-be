const hummus = require('hummus');
const path = require('path');
// console.log(hummus);
function writePdf () {
  var pdfWriter = hummus.createWriterToModify(path.join(__dirname, '../public/images/form.pdf'), {
    modifiedFilePath: path.join(__dirname, '../public/images/output/form.pdf'),
    log: path.join(__dirname, './log.log')
  });

  var pageModifier = new hummus.PDFPageModifier(pdfWriter, 0, true);
  pageModifier.startContext().getContext().writeText(
    '研究院',
    10, 750,
    { font: pdfWriter.getFontForFile(path.join(__dirname, '../simsun.ttc')), size: 9, colorspace: 'gray', color: 'black' }
  );

  pageModifier.startContext().getContext().writeText(
    '研究院',
    10, 780,
    { font: pdfWriter.getFontForFile(path.join(__dirname, '../simsun.ttc')), size: 9, colorspace: 'gray', color: 'black' }
  );

  pageModifier.endContext().writePage();
  pdfWriter.end();
}

writePdf();
