import User from './schema';

function insertUser (user, callback) {
  return null;
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
