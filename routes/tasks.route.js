const express = require('express');
const taskRoutes = express.Router();

let Task = require('../models/task.model');

taskRoutes.route('/').get(function(req, res) {
    Task.find(function(err, tasks) {
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
            task.name = req.body.name;
            task.description = req.body.description;
            task.link = req.body.link;
            task.student_id = req.body.student_id;

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