const Ids = require('./schema');
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
  return Ids.findOne({ createTime: createTime }).exec().then(_title => {
    return callback(_title);
  });
}

// 通过ids获取详细信息
function $getIdsDetails (callback) {
  return callback($getIds(data => { return data; }));
}

module.exports = { $modifyIds, $getIds, $getIdsDetails };
