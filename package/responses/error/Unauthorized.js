require('dotenv');
const EcomException = require('./EcomException');

function NotFoundException (message, metadata) {
  return {
    metadata,
    status: 401,
    type: "failure",
    message: message || 'Unauthorized',
  };
}

NotFoundException.prototype = new EcomException();

const Message = {
  code: 401,
  json: NotFoundException,
};

module.exports = Message;