const { $checkUser } = require('../mongo/index');

function checkUser (request, response, next) {
  const user = request.body;
  return $checkUser(user, data => {
    if (data) {
      return next();
    } else {
      const error = new Error('信息不合法');
      error.code = 2;
      return next(error);
    }
  });
}

exports.checkUser = checkUser;
