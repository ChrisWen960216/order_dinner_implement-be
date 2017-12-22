const schedule = require('node-schedule');
const { modifyPdf } = require('./modifyPdf');
const { ids } = require('../global');
const sendTime = require('../config.json').time.sendTime;
const cleanTime = require('../config.json').time.cleanTime;
// 定时器
function timingSendingMails () {
  schedule.scheduleJob(`${sendTime[1]} ${sendTime[0]} * * *`, function () {
    return modifyPdf();
  });
}

function timingCleanIds () {
  schedule.scheduleJob(`${cleanTime[1]} ${cleanTime[0]} * * *`, function () {
    return ids.clear();
  });
}

module.exports = { timingSendingMails, timingCleanIds };
