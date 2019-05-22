const express = require('express');
const classRoutes = express.Router();

let Class_req = require('../models/class.model');

classRoutes.route('/').get(function(req, res) {
    Class_req.find(function(err, classes_req) {
        if (err) {
            console.log(err);
        } else {
            res.json(classes_req);
        }
    });
});

classRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Class_req.findById(id, function(err, class_req) {
        res.json(class_req);
    });
});

classRoutes.route('/student/:id').get(function(req, res) {
    let id = req.params.id;
    console.log('student_id ' + id);
    Class_req.find({ student_id: id }, function(err, class_req) {
        res.json(class_req);
    });
});

classRoutes.route('/update/:id').post(function(req, res) {
    Class_req.findById(req.params.id, function(err, class_req) {
        if (!class_req)
            res.status(404).send("data is not found");
        else
            class_req.name = req.body.name;
            class_req.credits_needed = req.body.credits_needed;
            class_req.credits_completed = req.body.credits_completed;
            class_req.notes = req.body.notes;
            class_req.student_id = req.body.student_id;
            class_req.class_completed = req.body.class_completed;

            class_req.save().then(todo => {
                res.json('Class updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

classRoutes.route('/add').post(function(req, res) {
    let class_req = new Class_req(req.body);
    class_req.save()
        .then(todo => {
            res.status(200).json({'class': 'class added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new class failed');
        });
});

module.exports = classRoutes;