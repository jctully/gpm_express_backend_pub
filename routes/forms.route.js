const express = require('express');
const formRoutes = express.Router();

let Form = require('../models/form.model');

formRoutes.route('/').get(function(req, res) {
    Form.find(function(err, forms) {
        if (err) {
            console.log(err);
        } else {
            res.json(forms);
        }
    });
});

formRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Form.findById(id, function(err, form) {
        res.json(form);
    });
});

formRoutes.route('/student/:id').get(function(req, res) {
    let id = req.params.id;
    console.log('student_id ' + id);
    Form.find({ student_id: id }, function(err, form) {
        res.json(form);
    });
});

formRoutes.route('/update/:id').post(function(req, res) {
    Form.findById(req.params.id, function(err, form) {
        if (!form)
            res.status(404).send("data is not found");
        else
            form.name = req.body.name;
            form.url = req.body.url;
            form.notes = req.body.notes;
            form.student_id = req.body.student_id;
            form.form_completed = req.body.form_completed;

            form.save().then(todo => {
                res.json('Form updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

formRoutes.route('/add').post(function(req, res) {
    let form = new Form(req.body);
    form.save()
        .then(todo => {
            res.status(200).json({'form': 'form added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new form failed');
        });
});

module.exports = formRoutes;