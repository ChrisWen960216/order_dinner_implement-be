const { judgeTime } = require('../utils/checkTime');

function filterTime (request, response, next) {
  const now = new Date();
  if (judgeTime(now)) {
    return next();
  } else {
    const error = new Error('不在受理时间');
    error.code = 2;
    return next(error);
  }
}

exports.filterTime = filterTime;
