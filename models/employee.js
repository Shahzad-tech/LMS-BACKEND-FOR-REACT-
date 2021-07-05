var mongoose = require('mongoose');

var schema = mongoose.Schema;

var employeeSchema = new schema({
    name: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model('Employee', employeeSchema);