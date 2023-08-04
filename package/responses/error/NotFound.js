require('dotenv');
const EcomException = require('./EcomException');

function NotFoundException (message, metadata) {
  return {
    metadata,
    status: 404,
    type: "failure",
    message: message || 'Not Found',
  };
}

NotFoundException.prototype = new EcomException();

const Message = {
  code: 400,
  json: NotFoundException,
};

module.exports = Message;