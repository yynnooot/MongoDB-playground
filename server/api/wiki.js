// api/wiki
const router = require('express').Router();
const { Page } = require('../models');

router.get('/', function (req, res, next) { 
  Page.find({}, function(err, pages){
    if(err){
      console.log(err)
    }else{
      res.json(pages)
    }
  })
});

router.post('/', function (req, res, next) { 
  const newPage = new Page(req.body)
  newPage.save()
  .then(createdPage => {
    res.json(createdPage)
  })
});


router.put('/:id', function (req, res, next) { /* etc */});


router.delete('/:id', function (req, res, next) { /* etc */});

module.exports = router;