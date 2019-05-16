const express = require('express');
const studentRoutes = express.Router();

let Student = require('../models/student.model');

studentRoutes.route('/').get(function(req, res) {
    Student.find(function(err, students) {
        if (err) {
            console.log(err);
        } else {
            res.json(students);
        }
    });
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