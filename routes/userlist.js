const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (request, response) => {
  return response.json({ code: 0, payload: 'HAHA' });
});

module.exports = router;
