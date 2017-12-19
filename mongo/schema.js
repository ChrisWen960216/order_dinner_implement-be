/** Created By ChrisWen
 *  声明Schema
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const db = mongoose.createConnection('mongodb://localhost:27017/orderDinnerDB', { useMongoClient: true });

const idsSchema = new Schema({
  ids: Object,
  createTime: new Date()
});

const Ids = db.model('ids', idsSchema);

module.exports = Ids;
