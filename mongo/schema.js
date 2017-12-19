/** Created By ChrisWen
 *  声明Schema
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const db = mongoose.createConnection('mongodb://localhost:27017/orderDinnerDB', { useMongoClient: true });

const userSchema = new Schema({
  name: String,
  uid: Number,
  phone: Number,
  createTime: {
    type: Date,
    default: Date.now()
  }
});

const User = db.model('user', userSchema);

module.exports = User;
