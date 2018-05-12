// api/wiki
const router = require('express').Router();
const { Page } = require('../models');

router.get('/', function (req, res, next) { 
  
});


router.post('/', function (req, res, next) { /* etc */});


router.put('/:id', function (req, res, next) { /* etc */});


router.delete('/:id', function (req, res, next) { /* etc */});

module.exports = router;