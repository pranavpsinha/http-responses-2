require('dotenv');

function AcceptedResponse({ message, data, metadata }) {
  return {
    data,
    metadata,
    status: 202,
    type: 'success',
    message: message || 'Accepted',
  };
}

const Message = {
  code: 202,
  json: AcceptedResponse,
};

module.exports = Message;