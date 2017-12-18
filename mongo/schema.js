/** Created By ChrisWen
 *  声明Schema
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  uid: Number,
  phone: Number
});

const User = mongoose.model('user', userSchema);

module.exports = User;
