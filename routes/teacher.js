var express = require('express');
var router = express.Router();
var Marks = require('../models/studentmarks');
const cors = require('./cors');
var authenticate = require('../authenticate');


router.post('/createmarks',cors.cors, authenticate.verifyUser,authenticate.verifyAdmin, function(req, res, next) {
  Marks.create(req.body)
      .then((marks) => {
          console.log('marks created', marks);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(marks);
      }, (err) => next(err))
      .catch((err) => next(err));
});

router.put('/marks/:mid/number/:num',function(req, res, next) {  //done
  Marks.findOneAndUpdate({ _id: req.params.mid }, {
         
        "marks": req.params.num
        

      }, { new: true, upsert: false },
      function(error, results) {
          if (error) {
              return next(error);
          }
    
          res.json(results);
      });
});

router.get('/marks',cors.cors, authenticate.verifyUser,authenticate.verifyAdmin,function(req, res, next) {  //done
  Marks.find({}).populate('student').sort('name').exec(function(error, results) {
      if (error) {
          return next(error);
      }
    
      res.json(results);
  });
});




router.delete('/deletemarks/:mid',cors.cors, authenticate.verifyUser,authenticate.verifyAdmin, function(req, res, next) {

  Marks.deleteOne({ _id: req.params.mid }, function(error, results) {
    if (error) {
        return next(error);
    }
    res.json(results);
});
 
});


module.exports = router;
