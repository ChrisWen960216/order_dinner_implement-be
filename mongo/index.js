const { Ids, User } = require('./schema');
const { ids } = require('../global');
const { encode, decode } = require('../utils/transform');

// 增加 / 修改 ids
function $modifyIds (ids, callback) {
  const today = new Date();
  const month = today.getMonth() + 1;
  const createTime = `${today.getFullYear()}-${month}-${today.getDate()}`;
  return Ids.findOneAndUpdate({ createTime: createTime }, { ids: encode(ids), createTime: createTime }, { upsert: true, new: true }).then(_response => {
    return callback(_response);
  });
}

// 获取ids
function $getIds (callback) {
  const today = new Date();
  const month = today.getMonth() + 1;
  const createTime = `${today.getFullYear()}-${month}-${today.getDate()}`;
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

function $checkUser (user, callback) {
  let result = false;
  return User.findOne({ uid: user.uid, name: user.name, phone: user.phone }).exec().then(_response => {
    if (_response) {
      result = true;
    } else {
      result = false;
    }
    return callback(result);
  });
}

module.exports = { $modifyIds, $getIds, $getIdsDetails, $checkUser };
