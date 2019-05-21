const express = require('express');
const adminRoutes = express.Router();

let Admin = require('../models/admin.model');

adminRoutes.route('/').get(function(req, res) {
    console.log("IN FUNCTION ADMIN");
    Admin.find(function(err, admins) {
        if (err) {
            console.log(err);
        } else {
            res.json(admins);
        }
    });
});


adminRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Admin.findById(id, function(err, admin) {
        res.json(admin);
    });
});

adminRoutes.route('/update/:id').post(function(req, res) {
    Admin.findById(req.params.id, function(err, admin) {
        if (!admin)
            res.status(404).send("data is not found");
        else
            admin.admin_username = req.body.admin_username;
            admin.admin_name = req.body.admin_name;
            admin.admin_email = req.body.admin_email;

            admin.save().then(todo => {
                res.json('Admin updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

adminRoutes.route('/add').post(function(req, res) {
    let admin = new Admin(req.body);
    admin.save()
        .then(admin => {
            res.status(200).json({'admin': 'admin added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new admin failed');
        });
});

module.exports = adminRoutes;