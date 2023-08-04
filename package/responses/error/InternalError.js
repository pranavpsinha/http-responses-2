const EcomException = require('./EcomException');

function InternalError (message, metadata) {
  return {
    metadata,
    status: 500,
    type: "failure",
    message: message || 'Internal Server Error',
  };
}

InternalError.prototype = new EcomException();

const Message = {
  code: 500,
  json: InternalError,
};

module.exports = Message;