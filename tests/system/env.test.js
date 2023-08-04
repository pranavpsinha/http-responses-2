require('dotenv').config();

test('Response Manager', async () => {
  const Manager = require('../defaults') || {};

  expect(void 0 !== Manager?.success).toBeTruthy();
  expect(void 0 !== Manager?.error).toBeTruthy();
});

test('Response Manager - Success', async () => {
  const Manager = require('../defaults') || {};

  expect(void 0 !== Manager?.success?.Accepted).toBeTruthy();
  expect(void 0 !== Manager?.success?.Created).toBeTruthy();
  expect(void 0 !== Manager?.success?.Ok).toBeTruthy();
});

test('Response Manager - Error', async () => {
  const Manager = require('../defaults') || {};

  expect(void 0 !== Manager?.error?.Expired).toBeTruthy();
  expect(void 0 !== Manager?.error?.Forbidden).toBeTruthy();
  expect(void 0 !== Manager?.error?.InternalError).toBeTruthy();
  expect(void 0 !== Manager?.error?.InvalidRequest).toBeTruthy();
  expect(void 0 !== Manager?.error?.LimitExceeded).toBeTruthy();
  expect(void 0 !== Manager?.error?.NotFound).toBeTruthy();
  expect(void 0 !== Manager?.error?.Unauthorized).toBeTruthy();
});