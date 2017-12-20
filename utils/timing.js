const schedule = require('node-schedule');
const { getAndSendPng } = require('./createPng');
// 定时器
function timing () {
  schedule.scheduleJob('40 * * * * *', function () {
    return getAndSendPng();
    // console.log('The answer to life, the universe, and everything!');
  });
}

module.exports = timing;
