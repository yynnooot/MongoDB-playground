// api/index.js
const router = require('express').Router();

router.use('/users', require('./users')); // matches all requests to /api/users/
router.use('/wiki', require('./wiki'))

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;