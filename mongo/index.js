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

/**
 * @return {1:用户信息正确，电话错误 2:用户信息错误 3: 匹配通过}
 */

function $checkUser (user, callback) {
  let result = 2;
  return User.findOne({ uid: user.uid, name: user.name }).exec().then(_response => {
    if (_response) {
      if (_response.phone !== user.phone) {
        result = 1;
      } else {
        result = 3;
      }
    } else {
      result = 2;
    }
    return callback(result);
  });
}

module.exports = { $modifyIds, $getIds, $getIdsDetails, $checkUser };
