const express = require('express');

const router = express.Router();

module.exports = item => {
  router.get('/', (req, res) => {
    console.log(item);
    res.send('This is practice done by milton');
  });

  return router;
};
