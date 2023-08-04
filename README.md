# Generic Response Manager

The Generic Response Manager is a utility module that simplifies the process of handling API responses in your Node.js applications. It provides a standardized structure for success and error responses for standard HTTP methods, making it easier to handle and communicate API responses consistently.

## Installation

You can install the Generic Response Manager package from npm using the following command:

```shell
npm install http-responses-2
```

## Usage

Out of box, the package provides two accessors viz. success and error

### Success
```shell
200 - OK
201 - Created
202 - Accepted
```

### Error
```shell
400 - Invalid Request
401 - Unauthorized
403 - Forbidden
404 - Not Found
429 - Too Many Requests
498 - Expired
500 - Internal Server Error
```

## Example

### Error
```shell
const express  = require('express');
const app      = express();
const Response = require('http-responses-2');

app.get('/error/forbidden', async function(_req, res, _next) {
  return res.status(Response.error.Forbidden.code).json(Response.error.Forbidden.json());
});

app.get('/error/expired', async function(_req, res, _next) {
  return res.status(Response.error.Expired.code).json(Response.error.Expired.json(`User session expired!`));
});
```

### Success
```shell
const express  = require('express');
const app      = express();
const Response = require('http-responses-2');

app.get('/success/ok', async function(_req, res, _next) {
  return res.status(Response.success.Ok.code).json(Response.success.Ok.json({
    message: 'Details obtained',
    data: [1,2,3],
    metadata: { "type": "test" }
  }));
});
```

### Note
This package will help you streamline API responses across your application.

## Bonus
Read my article on [test-driven development in NodeJS](https://medium.com/@pranavpsinha/getting-started-with-tdd-test-driven-development-in-nodejs-jest-supertest-a-complete-and-60351ff5fad2)