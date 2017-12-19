var express = require('express');
var router = express.Router();
const { insertUser } = require('../mongo/index');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (request, response) => {
  const user = request.body;
  user.phone = 18883878791;
  user.createTime = new Date();
  return insertUser(user, data => { return response.json(data); });
});

module.exports = router;
