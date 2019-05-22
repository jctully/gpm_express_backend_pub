const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskTemplate = new Schema({
    template_name: {
        type: String
    },
    tasks: {
        type: [String]
    }
});

module.exports = mongoose.model('TaskTemplate', TaskTemplate);