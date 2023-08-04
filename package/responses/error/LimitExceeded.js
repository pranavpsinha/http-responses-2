const EcomException = require('./EcomException');

function LimitExceededException (message, metadata) {
  return {
    metadata,
    status: 429,
    type: "failure",
    message: message || 'Too Many Requests',
  };
}

LimitExceededException.prototype = new EcomException();

const Message = {
  code: 429,
  json: LimitExceededException,
};

module.exports = Message;