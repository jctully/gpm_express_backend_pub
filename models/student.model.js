const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({
    student_username: {
        type: String
    },
    student_name: {
        type: String
    },
    western_id: {
        type: String
    },
    email: {
        type: String
    },
    admission_qtr: {
        type: String
    }
});

module.exports = mongoose.model('Student', Student);