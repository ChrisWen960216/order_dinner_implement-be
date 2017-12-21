const starttime = require('../config.json').time.startTime;
const finshtime = require('../config.json').time.finshTime;

function judgeTime (time) {
  const localTime = quantizationTime(time);
  const timeRange = setTimeRange();
  if (timeRange[0] < localTime && localTime < timeRange[1]) {
    return true;
  } else {
    return false;
  }
  // startTime < localTime < endTime
  // return true / false
}
/**
 * 量化时间
 * @param {Date} time
 * @return {Number}
 */

function quantizationTime (time) {
  return time.getTime();
  // number
}

function setTimeRange () {
  const startTime = new Date();
  startTime.setHours(starttime[0], starttime[1]);
  const finshTime = new Date();
  finshTime.setHours(finshtime[0], finshtime[1]);
  return [quantizationTime(startTime), quantizationTime(finshTime)];
}

exports.judgeTime = judgeTime;
