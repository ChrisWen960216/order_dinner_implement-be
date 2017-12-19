const express = require('express');
const router = express.Router();
const { $modifyIds } = require('../mongo/index');
const { ids } = require('../global');

router.post('/add', (request, response) => {
  const user = request.body;
  const { uid } = user;
  if (ids.has(uid)) {
    const message = 'You have already orderd!';
    return response.json({ code: 1, payload: message });
  } else {
    ids.add(uid);
    $modifyIds(ids);
    // 数据库操作
    const message = 'Order complete!';
    return response.json({ code: 0, payload: message });
  }
});

router.post('/delete', (request, response) => {
  const user = request.body;
  const { uid } = user;
  if (!ids.has(uid)) {
    const message = 'Can not find user';
    return response.json({ code: 1, payload: message });
  } else {
    if (ids.delete(uid)) {
      $modifyIds(ids);
      // 数据库操作
      const message = 'Cancel complete!';
      return response.json({ code: 0, payload: message });
    } else {
      const message = 'BackEnd has an Error';
      return response.json({ code: 1, payload: message });
    }
  }
});

module.exports = router;
