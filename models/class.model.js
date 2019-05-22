const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Class = new Schema({
    name: {
        type: String
    },
    credits_needed: {
        type: String
    },
    credits_completed: {
        type: String
    },
    notes: {
        type: String
    },
    student_id: {
        type: String
    },
    class_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Class', Class);