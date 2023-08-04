require('dotenv');

function OkResponse({ message, data, metadata }) {
  return {
    data,
    metadata,
    status: 200,
    type: 'success',
    message: message || 'OK',
  };
}

const Message = {
  code: 200,
  json: OkResponse,
};

module.exports = Message;