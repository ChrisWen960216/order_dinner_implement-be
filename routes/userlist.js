const express = require('express');
const router = express.Router();
const { ids } = require('../global');
const { $getIdsDetails } = require('../mongo/index');

router.get('/', (request, response) => {
  // do something
  return $getIdsDetails(data => { response.json({ code: 0, payload: data }); });
});

module.exports = router;
