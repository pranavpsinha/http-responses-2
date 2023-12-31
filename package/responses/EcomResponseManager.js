// exceptions
const InternalError  = require('./error/InternalError');
const Forbidden      = require('./error/Forbidden');
const InvalidRequest = require('./error/InvalidRequest');
const NotFound       = require('./error/NotFound');
const Expired        = require('./error/Expired');
const LimitExceeded  = require('./error/LimitExceeded');
const Unauthorized   = require('./error/Unauthorized');

// success
const Ok       = require('./success/Ok');
const Accepted = require('./success/Accepted');
const Created  = require('./success/Created');

module.exports = {
  error: {
    Expired,
    Forbidden,
    InternalError,
    InvalidRequest,
    LimitExceeded,
    NotFound,
    Unauthorized
  },
  success: {
    Accepted,
    Created,
    Ok,
  },
};
