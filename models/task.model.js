const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Task = new Schema({
    task_name: {
        type: String
    },
    task_description: {
        type: String
    },
    task_link: {
        type: String
    },
    task_student_id: {
        type: String
    },
    task_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Task', Task);