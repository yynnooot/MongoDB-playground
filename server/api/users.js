// api/users.js
const router = require('express').Router();
const { User } = require('../models');


router.get('/', function (req, res, next) { 
  User.find({}, function(err, users){
    if(err){
      console.log(err)
    }else{
      res.json(users)
    }
  })
});


router.post('/', function (req, res, next) {
  const newUser = new User(req.body)
  newUser.save()
    .then(createdUser => {
      res.json(createdUser)
    })
});


router.put('/:id', function (req, res, next) { /* etc */});


router.delete('/:id', function (req, res, next) { /* etc */});

module.exports = router;