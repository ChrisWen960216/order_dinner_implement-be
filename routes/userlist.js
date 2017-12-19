const express = require('express');
const router = express.Router();
const { ids } = require('../global');
// router.get('/', (request, response) => {
//   return response.json({ code: 0, payload: 'HAHA' });
// });

router.get('/', (request, response) => {
  // do something
  response.json({ code: 0, payload: 'HAHA' });
});

module.exports = router;
