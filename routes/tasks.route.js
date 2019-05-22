const express = require('express');
const taskRoutes = express.Router();

let Task = require('../models/task.model');

taskRoutes.route('/').get(function(req, res) {
    console.log("IN FUNCTION TASKS");
    Task.find({admission_qtr : "s19"}, function(err, tasks) {
        if (err) {
            console.log(err);
        } else {
            res.json(tasks);
        }
    });
});

taskRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Task.findById(id, function(err, task) {
        res.json(task);
    });
});

taskRoutes.route('/student/:id').get(function(req, res) {
    let id = req.params.id;
    console.log('student_id ' + id);
    Task.find({ task_student_id: id }, function(err, task) {
        res.json(task);
    });
});

taskRoutes.route('/update/:id').post(function(req, res) {
    Task.findById(req.params.id, function(err, task) {
        if (!task)
            res.status(404).send("data is not found");
        else
            task.task_name = req.body.task_name;
            task.task_description = req.body.task_description;
            task.task_link = req.body.task_link;
            task.task_student_id = req.body.task_student_id;
            task.task_completed = req.body.task_completed;

            task.save().then(task => {
                res.json('Task updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

taskRoutes.route('/add').post(function(req, res) {
    let task = new Task(req.body);
    task.save()
        .then(task => {
            res.status(200).json({'task': 'task added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new task failed');
        });
});

module.exports = taskRoutes;