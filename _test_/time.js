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
  startTime.setHours(8, 15, 0, 0);
  const finshTime = new Date();
  finshTime.setHours(16, 20, 0, 0);
  return [quantizationTime(startTime), quantizationTime(finshTime)];
}

console.log(judgeTime(new Date()));
