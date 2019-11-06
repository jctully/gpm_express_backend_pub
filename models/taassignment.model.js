const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TAAssignment = new Schema({
    class_name: {
        type: String
    },
    ta_year: {
        type: String
    },
    ta_qtr: {
        type: String
    },
    student_id: {
        type: String
    }  
});

module.exports = mongoose.model('TAAssignment', TAAssignment);