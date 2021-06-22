var express = require('express');
var router = express.Router();
var Marks = require('../models/studentmarks');

router.post('/createmarks', function(req, res, next) { //create marks route
  Marks.create(req.body)
      .then((marks) => {
          console.log('marks created', marks);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(marks);
      }, (err) => next(err))
      .catch((err) => next(err));
});

router.put('/marks/:mid/number/:num',function(req, res, next) {  //update marks route
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

router.get('/marks',function(req, res, next) {  //display marks route
  Marks.find({}).populate('student').sort('name').exec(function(error, results) {
      if (error) {
          return next(error);
      }
    
      res.json(results);
  });
});


router.delete('/deletemarks/:mid', function(req, res, next) {  //delete marks route

  Marks.deleteOne({ _id: req.params.mid }, function(error, results) {
    if (error) {
        return next(error);
    }
    res.json(results);
});
 
});


//**************************************************************************************************************************/

// var storage = multer.diskStorage({

//   destination: function(req,file,cb){
//     cb(null,'public')
//   },
//   filename:function(req,file,cb){
//     cb(null, file.originalname)
//   }
// })

// var upload = multer({storage:storage})

// router.post('/addmat', upload.single('myfile') , function(req,res,next){

//   var record = new FileUpload;

//   record.name = req.body.name;
//   record.files.data = fs.readFileSync(req.file.path);
//   record.files.contentType = 'application/pdf';
//   record.save((err,result)=>{
//     console.log(result)
//     res.statusCode = 200;
//     if(err) return console.log(err)
//     console.log('saved to database')
//     res.send(record)

//   })



  
// })



module.exports = router;




