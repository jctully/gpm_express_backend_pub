const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Admin = new Schema({
    username: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('Admin', Admin);