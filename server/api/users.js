// api/users.js
const router = require('express').Router();
const { User } = require('../models');


router.get('/', function (req, res, next) { 
  const newUser = new User({name: 'Hello', email: '1.com' })
  newUser.save()
});


router.post('/', function (req, res, next) { /* etc */});


router.put('/:id', function (req, res, next) { /* etc */});


router.delete('/:id', function (req, res, next) { /* etc */});

module.exports = router;