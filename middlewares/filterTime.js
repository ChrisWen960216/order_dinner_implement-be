const { judgeTime } = require('../utils/checkTime');
const starttime = require('../config.json').time.startTime;
const finshtime = require('../config.json').time.finshTime;

const startTime = `${starttime[0]}:${starttime[1]}`;
const finshTime = `${finshtime[0]}:${finshtime[1]}`;

function filterTime (request, response, next) {
  const now = new Date();
  if (judgeTime(now)) {
    return next();
  } else {
    const error = new Error(`不在受理时间 ${startTime}-${finshTime}`);
    error.code = 2;
    return next(error);
  }
}

exports.filterTime = filterTime;
