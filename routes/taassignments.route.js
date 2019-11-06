const express = require('express');
const taassignmentsRoutes = express.Router();

let TAAssignment_req = require('../models/taassignment.model');

taassignmentsRoutes.route('/').get(function(req, res) {
    TAAssignment_req.find(function(err, taassignments_req) {
        if (err) {
            console.log(err);
        } else {
            res.json(taassignments_req);
        }
    });
});

taassignmentsRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    TAAssignment_req.findById(id, function(err, taassignment_req) {
        res.json(taassignment_req);
    });
});

taassignmentsRoutes.route('/taassignment/:id').get(function(req, res) {
    let id = req.params.id;
    console.log('tassignment ' + id);
    TAAssignment_req.find({ student_id: id }, function(err, taassignment_req) {
        res.json(taassignment_req);
    });
});

taassignmentsRoutes.route('/tassignment/:id').post(function(req, res) {
    TAAssignment_req.findById(req.params.id, function(err, taassignment_req) {
        if (!taassignment_req)
            res.status(404).send("data is not found");
        else
            taassignment_req.class_name = req.body.class_name;
            taassignment_req.ta_year = req.body.ta_year;
            taassignment_req.ta_qtr = req.body.ta_qtr;
            taassignment_req.student_id = req.body.student_id;

            taassignment_req.save().then(todo => {
                res.json('TAAssignment updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

taassignmentsRoutes.route('/add').post(function(req, res) {
    let taassignment_req = new TAAssignment_req(req.body);
    taassignment_req.save()
        .then(todo => {
            res.status(200).json({'TAAssignment': 'TAAssignment added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new TAAssignment failed');
        });
});

module.exports = taassignmentsRoutes;