const User = require('./schema');

function insertUser (user, callback) {
  const userModel = new User(user);
  userModel.save((error, doc) => {
    if (!error) {
      console.log(doc);
    }
  });
}

function deleteUser (user, callback) {
  return null;
}

function getUserList (callback) {
  const localTime = new Date();
  const condition = '123';
  return User.find(condition).exec().then((error, _userlist) => {
    if (error) {
      return callback(error);
    } else {
      return callback(_userlist);
    }
  });
}

module.exports = { insertUser, deleteUser, getUserList };
