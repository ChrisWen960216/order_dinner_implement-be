const { ids } = require('../global');

/** Created By ChrisWen
 *  声明Schema
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const idsDB = mongoose.createConnection('mongodb://localhost:27017/orderDinnerDB', { useMongoClient: true });

const idsSchema = new Schema({
  ids: Object,
  createTime: String
});

const userSchema = new Schema({
  name: String,
  uid: String,
  phone: String
});

const Ids = idsDB.model('ids', idsSchema);
const User = idsDB.model('user', userSchema);

module.exports = { Ids, User };
