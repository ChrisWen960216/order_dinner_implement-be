const express = require('express');
const router = express.Router();
const { $modifyIds } = require('../mongo/index');
const { ids } = require('../global');

router.post('/add', (request, response) => {
  const user = request.body;
  const { uid } = user;
  if (ids.has(uid)) {
    const message = '请不要重复预订';
    return response.json({ code: 1, payload: message });
  } else {
    console.log('ids', ids);
    ids.add(uid);
    $modifyIds(ids, data => {
      if (data) {
        const message = '预订成功';
        return response.json({ code: 0, payload: message });
      } else {
        const message = 'DB错误';
        return response.json({ code: 3, payload: message });
      }
    });
    // 数据库操作
  }
});

router.post('/delete', (request, response) => {
  const user = request.body;
  const { uid } = user;
  if (!ids.has(uid)) {
    const message = '没有这个用户';
    return response.json({ code: 1, payload: message });
  } else {
    if (ids.delete(uid)) {
      $modifyIds(ids, data => {
        if (data) {
          const message = '取消成功';
          return response.json({ code: 0, payload: message });
        } else {
          const message = 'DB错误';
          return response.json({ code: 3, payload: message });
        }
      });
      // 数据库操作
    } else {
      const message = 'ids处理出错';
      return response.json({ code: 1, payload: message });
    }
  }
});

module.exports = router;
