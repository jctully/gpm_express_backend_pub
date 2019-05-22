const express = require('express');
const taskTemplateRoutes = express.Router();

let TaskTemplate = require('../models/task.template.model');

taskTemplateRoutes.route('/').get(function(req, res) {
    TaskTemplate.find(function(err, taskTemplate) {
        if (err) {
            console.log(err);
        } else {
            res.json(taskTemplate);
        }
    });
});

taskTemplateRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    TaskTemplate.findById(id, function(err, taskTemplate) {
        res.json(taskTemplate);
    });
});

{/* 
taskTemplateRoutes.route('/student/:id').get(function(req, res) {
    let id = req.params.id;
    console.log('student_id ' + id);
    Task.find({ task_student_id: id }, function(err, task) {
        res.json(task);
    });
});
*/}

taskTemplateRoutes.route('/update/:id').post(function(req, res) {
    Task.findById(req.params.id, function(err, taskTemplate) {
        if (!taskTemplate)
            res.status(404).send("data is not found");
        else
            taskTemplate.template_name = req.body.template_name;
            taskTemplate.tasks = req.body.tasks;
            

            task.save().then(taskTemplate => {
                res.json('Task Template updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

taskTemplateRoutes.route('/add').post(function(req, res) {
    let taskTemplate = new TaskTemplate(req.body);
    taskTemplate.save()
        .then(taskTemplate => {
            res.status(200).json({'taskTemplate': 'taskTemplate added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new task template failed');
        });
});

module.exports = taskTemplateRoutes;