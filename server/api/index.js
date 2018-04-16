'use strict';
const apiRouter = require('express').Router();

apiRouter.use('/users', require('./user'));

apiRouter.use(function (err, req, res, next) {
  console.error(err, err.stack);
  res.status(500).send(err);
});


module.exports = apiRouter;
