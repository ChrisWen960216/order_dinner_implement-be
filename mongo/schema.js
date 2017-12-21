const { ids } = require('../global');
const dbUrl = require('../config.json').db.url;
/** Created By ChrisWen
 *  声明Schema
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const idsDB = mongoose.createConnection(dbUrl, { useMongoClient: true });

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
