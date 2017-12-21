const schedule = require('node-schedule');
const { getAndSendPng } = require('./createPng');
const { ids } = require('../global');
// 定时器
function timingSendingMails () {
  schedule.scheduleJob('* 25 16 * * *', function () {
    return getAndSendPng();
    // console.log('The answer to life, the universe, and everything!');
  });
}

function timingCleanIds () {
  schedule.scheduleJob('* 0 8 * * *', function () {
    return ids.clear();
  });
}

module.exports = { timingSendingMails, timingCleanIds };
