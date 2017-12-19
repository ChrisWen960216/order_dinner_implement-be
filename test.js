const { insertUser } = require('./mongo/index');

const user = { name: '123', uid: 333, phone: 166 };
insertUser(user, data => { console.log(data); });
