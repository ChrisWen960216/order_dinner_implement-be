const Ids = require('./schema');
const moment = require('moment');
const toDay = moment().format('L');

// 增加 / 修改 ids
function $modifyIds (ids, callback) {
  return null;
}

// 获取ids
function $getIds (callback) {
  return null;
}

// 通过ids获取详细信息
function $getIdsDetails (ids, callback) {
  return null;
}

module.exports = { $insertUser, $deleteUser, $getUserList, $getUserInfo };
