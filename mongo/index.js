const { Ids, User } = require('./schema');
const { ids } = require('../global');
const { encode, decode } = require('../utils/transform');

// 增加 / 修改 ids
function $modifyIds (ids) {
  const today = new Date();
  const createTime = `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`;
  return Ids.findOneAndUpdate({ createTime: createTime }, { ids: encode(ids), createTime: createTime }, { upsert: true, new: true }).then(_response => {
    return _response;
  });
}

// 获取ids
function $getIds (callback) {
  const today = new Date();
  const createTime = `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`;
  return Ids.findOne({ createTime: createTime }).exec().then(_response => {
    return callback(_response);
  });
}

// 通过ids获取详细信息
function $getIdsDetails (callback) {
  return $getIds(data => {
    const idsDetail = data.ids.split(',');
    User.find({ uid: { $in: idsDetail } }).then(_response => {
      return callback(_response);
    });
  });
}

module.exports = { $modifyIds, $getIds, $getIdsDetails };
