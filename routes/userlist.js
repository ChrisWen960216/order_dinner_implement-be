const express = require('express');
const router = express.Router();
const { ids, getClientIp } = require('../global');
const { $getIdsDetails } = require('../mongo/index');
const { judgeTime } = require('../utils/checkTime');
const starttime = require('../config.json').time.startTime;
const finshtime = require('../config.json').time.finshTime;

const startTime = `${starttime[0]}:${starttime[1]}`;
const finshTime = `${finshtime[0]}:${finshtime[1]}`;

router.get('/', (request, response) => {
  console.log('IP', getClientIp(request));
  const now = new Date();
  const timeStatus = judgeTime(now);
  // 地址 请求的url 时间
  return $getIdsDetails(data => { response.json({ code: 0, payload: data, timeStatus: timeStatus, startTime: startTime, finshTime: finshTime }); });
});

module.exports = router;
