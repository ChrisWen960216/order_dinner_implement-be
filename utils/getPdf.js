var PDF = require('pdfkit'); // including the pdfkit module
var fs = require('fs');

function getPdf (callback) {
  const doc = new PDF({ size: 'A4' }); // creating a new PDF object
  doc.pipe(fs.createWriteStream('../public/images/orderlist.pdf')); // creating a write stream
  // to write the content on the file system
  doc.image('../public/images/A4.jpg');
  // more things can be added here including new pages
  doc.end(); // we end the document writing.
  return callback();
}
exports.getPdf = getPdf;
