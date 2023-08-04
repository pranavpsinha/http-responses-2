const EcomException = require('./EcomException');

function ForbiddenAccess (message, metadata) {
  return {
    metadata,
    status: 403,
    type: "failure",
    message: message || 'Forbidden',
  };
}

ForbiddenAccess.prototype = new EcomException();

const Message = {
  code: 403,
  json: ForbiddenAccess,
};

module.exports = Message;