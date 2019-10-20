const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({
    student_username: {
        type: String
    },
    email: {
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
    },
    admission_year: {
        type: String
    },
    program_code: { // fast track or regular -- ft or reg?
        type: String
    },
    status: {
        type: String
    },
    ta_assignment: { // list of history? boolean? other?
        type: String
    },
    plan_of_study_link: {
        type: String
    },
    plan_of_study_amendments_link: { // list of amendments?
        type: String
    },
    research_form_692_link: {
        type: String
    },
    expected_grad_qtr: {
        type: String
    },
    app_to_graduate_form_link: {
        type: String
    },
    degree_app_form_link: {
        type: String
    },
    degree_rec_form_link: {
        type: String
    },
    other_notes: {
        type: String
    }
});

module.exports = mongoose.model('Student', Student);