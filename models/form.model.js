const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Form = new Schema({
    form_name: {
        type: String
    },
    url: {
        type: String
    },
    student: {
        type: String
    }
});

module.exports = mongoose.model('Form', Form);