const EcomException = require('./EcomException');

function Expired (message, metadata) {
  return {
    metadata,
    status: 498,
    type: "failure",
    message: message || 'Invalid Token',
  };
}

Expired.prototype = new EcomException();

const Message = {
  code: 498,
  json: Expired,
};

module.exports = Message;