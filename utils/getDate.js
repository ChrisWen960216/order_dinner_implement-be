/** Created By ChrisWen
 *  Get Local Time
 */
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const weekend = date.getDay();

const localTime = {
  year: year,
  month: month,
  day: day,
  hour: hour,
  minute: minute,
  second: second,
  weekend: weekend
};

module.exports = localTime;
console.log(localTime);

console.log(`${year}年${month}月${day}日 ${hour}:${minute}:${second} 星期${weekend}`);
