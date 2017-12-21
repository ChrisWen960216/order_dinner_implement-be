/** 初始化ids
 *
 */
const { ids } = require('../global');
const { $getIds } = require('../mongo/index');
const { decode } = require('./transform');

function initIds () {
  return $getIds(data => {
    const Ids = data.ids;
    decode(Ids, ids);
  });
}

exports.initIds = initIds;
