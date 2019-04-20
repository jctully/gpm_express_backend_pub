const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({
    username: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    program_start_date: {
        type: Date
    }
});

module.exports = mongoose.model('Student', Student);