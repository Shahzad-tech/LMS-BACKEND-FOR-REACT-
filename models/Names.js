var mongoose = require('mongoose');

var schema = mongoose.Schema;

var Names = new schema({
    
    name: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model('Names', Names);