const schedule = require('node-schedule');

// 定时器
function timing () {
  schedule.scheduleJob('42 * * * * *', function () {
    console.log('The answer to life, the universe, and everything!');
  });
}

module.exports = timing;
