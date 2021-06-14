var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var markSchema = new Schema({

    student:{
        type:mongoose.Types.ObjectId,
        ref:'Student'
        },

    name:{
        type:String,
        required:true
    },
    
    marks:{
       type:Number,
       required:true
   }
})

module.exports = mongoose.model('Marks',markSchema);
