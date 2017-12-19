/** 初始化ids
 *
 */
let { ids } = require('../global');
const { $getIds } = require('../mongo/index');

function initIds () {
  const initIds = $getIds();
  ids = initIds;
  return ids;
}
