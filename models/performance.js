var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var performanceSchema = new Schema({

    
    assignedbywhom:{
        type:mongoose.Types.ObjectId,
        ref:'Names'
        },

    grading:{
        type:String,
        required:true
    },
    
})

module.exports = mongoose.model('Performace', performanceSchema);
