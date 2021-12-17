const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');

module.exports = params => {
  router.get('/', (req, res) => {
    console.log(params);
    return res.send('Hi');
  });

  return router;
};
