const EcomException = require('./EcomException');

function InvalidRequestException (message, metadata) {
  return {
    metadata,
    status: 400,
    type: "failure",
    message: message || 'Bad Request',
  };
}

InvalidRequestException.prototype = new EcomException();

const Message = {
  code: 400,
  json: InvalidRequestException,
};

module.exports = Message;