const express = require('express');

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');
const aboutRoute = require('./about');
const miltonRoute = require('./practice');

const router = express.Router();

module.exports = params => {
  router.get('/', (request, response) => {
    // if (!request.session.visitcount) {
    //   request.session.visitcount = 0;
    // }
    // request.session.visitcount += 1;
    // console.log(`Number of visits: ${request.session.visitcount}`);

    response.render('layout', { pageTitle: 'Welcome', template: 'index' }); //default to index.ejs in layout
  });

  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));
  router.use('/about', aboutRoute(params));
  router.use('/milton', miltonRoute(10));

  return router;
};
