const Ids = require('./schema');
const { encode, decode } = require('../utils/transform');
// 增加 / 修改 ids
function $modifyIds (ids) {
  const today = new Date();
  const createTime = `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`;
  // const idsModel = new Ids();
  // idsModel.ids = ids;
  // idsModel.createTime = createTime;
  Ids.findOneAndUpdate({ createTime: createTime }, { ids: encode(ids), createTime: createTime }, { upsert: true, new: true }).then(_response => {
    return _response;
  });
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
