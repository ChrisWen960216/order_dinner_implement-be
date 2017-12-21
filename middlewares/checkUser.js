const { $checkUser } = require('../mongo/index');

function checkUser (request, response, next) {
  const user = request.body;
  return $checkUser(user, data => {
    if (data === 1) {
      const error = new Error('用户电话错误');
      error.code = 1;
      return next(error);
    } else if (data === 2) {
      const error = new Error('信息不合法');
      error.code = 1;
      return next(error);
    } else if (data === 3) {
      return next();
    }
  });
}

exports.checkUser = checkUser;
