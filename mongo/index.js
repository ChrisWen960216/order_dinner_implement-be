const Ids = require('./schema');
const moment = require('moment');
const toDay = moment().format('L');

// 增加 / 修改 ids
function $modifyIds (ids) {
  return null;
}

// 获取ids
function $getIds () {
  return null;
}

// 通过ids获取详细信息
function $getIdsDetails (ids) {
  return null;
}

module.exports = { $modifyIds, $getIds, $getIdsDetails };
