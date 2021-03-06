const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Form = new Schema({
    name: {
        type: String
    },
    url: {
        type: String
    },
    notes: {
        type: String
    },
    student_id: {
        type: String
    },
    form_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Form', Form);