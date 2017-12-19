const express = require('express');
const router = express.Router();
const { insertUser } = require('../mongo/index');

const ids = new Set();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (request, response) => {
  const user = request.body;
  const { uid } = user;
  if (ids.has(uid)) {
    const message = '您已经订过餐啦!';
    return response.json({ code: 1, payload: message });
  } else {
    ids.add(uid);
    // 数据库操作
    const message = '订餐成功！记得准时吃饭喔';
    return response.json({ code: 0, payload: message });
  }
});

module.exports = router;
