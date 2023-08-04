require('dotenv');

function CreatedResponse({ message, data, metadata }) {
  return {
    data,
    metadata,
    status: 201,
    type: 'success',
    message: message || 'Created',
  };
}

const Message = {
  code: 201,
  json: CreatedResponse,
};

module.exports = Message;