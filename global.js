const ids = new Set();
const idsDetail = [];
function getClientIp (req) {
  var ipAddress;
  var forwardedIpsStr = req.header('x-forwarded-for');
  if (forwardedIpsStr) {
    var forwardedIps = forwardedIpsStr.split(',');
    ipAddress = forwardedIps[0];
  }
  if (!ipAddress) {
    ipAddress = req.connection.remoteAddress;
  }
  return ipAddress;
}

exports.ids = ids;
exports.idsDetail = idsDetail;
exports.getClientIp = getClientIp;
