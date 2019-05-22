const express = require('express');
const studentRoutes = express.Router();

let Student = require('../models/student.model');

studentRoutes.route('/').get(function(req, res) {
    let qry = req.query.search;
    let qtr = req.query.qtr;
    if (qry != null) {
        Student.find({ 
            $or:[ 
                {'student_username':qry}, 
                {'student_name':qry}, 
                {'western_id':qry} 
            ]}, function(err, students) {
            if (err) {
                console.log(err);
            } else {
                res.json(students);
            } 
        });
    }
    else if (qtr != null) {
        Student.find({admission_qtr: qtr}, function(err, students) {
            if (err) {
                console.log(err);
            } else {
                res.json(students);
            } 
        });
    }
    else {
        Student.find(function(err, students) {
            if (err) {
                console.log(err);
            } else {
                res.json(students);
            } 
        });
    } 
});

studentRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Student.findById(id, function(err, student) {
        res.json(student);
    });
});

studentRoutes.route('/update/:id').post(function(req, res) {
    Student.findById(req.params.id, function(err, student) {
        if (!student)
            res.status(404).send("data is not found");
        else
            student.student_username = req.body.student_username;
            student.student_name = req.body.student_name;
            student.student_email = req.body.student_username+"@wwu.edu";
            student.western_id = req.body.western_id;
            student.admission_qtr = req.body.admission_qtr;

            // Request New Fields
            student.status = req.body.status;
            student.ta_assignment = req.body.ta_assignment;
            student.plan_of_study_link = req.body.plan_of_study_link;
            student.plan_of_study_amendments_link = req.body.plan_of_study_amendments_link;
            student.research_form_692_link = req.body.research_form_692_link;
            student.expected_grad_qtr = req.body.expected_grad_qtr;
            student.app_to_graduate_form_link = req.body.app_to_graduate_form_link;
            student.degree_app_form_link = req.body.degree_app_form_link;
            student.other_notes = req.body.other_notes;

            student.save().then(todo => {
                res.json('Student updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

studentRoutes.route('/add').post(function(req, res) {
    let student = new Student(req.body);
    student.save()
        .then(student => {
            res.status(200).json({'student': 'student added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new student failed');
        });
});

module.exports = studentRoutes;