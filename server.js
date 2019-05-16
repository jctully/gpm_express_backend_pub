const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const studentRoutes = require('./routes/students.route');
const adminRoutes = require('./routes/admins.route');
const todoRoutes = require('./routes/todos.route');
const formRoutes = require('./routes/forms.route');

var CASAuthentication = require('cas-authentication');

var cas = new CASAuthentication({
    cas_url         : 'https://websso.wwu.edu/cas',
    service_url     : 'https://gpm.cs.wwu.edu',
    cas_version     : '3.0',
    renew           : false,
    is_dev_mode     : true,
    dev_mode_user   : 'testperson',
    dev_mode_info   : {},
    session_name    : 'cas_user',
    session_info    : 'cas_userinfo',
    destroy_session : true
});

var session = require('express-session');

// Set up an Express session, which is required for CASAuthentication.
app.use( session({
    secret            : 'L>fP@8G52tFYt?gx',
    resave            : false,
    saveUninitialized : true
}));

// Create a new instance of CASAuthentication.
var cas = new CASAuthentication({
    cas_url     : 'https://websso.wwu.edu/cas',
    service_url : 'https://gpm.cs.wwu.edu'
});

// Unauthenticated clients will be redirected to the CAS login and then back to
// this route once authenticated.
app.get( '/login', cas.bounce, function ( req, res ) {
    res.send( '<html><body>Hello'+cas.getUser+'!</body></html>' );
});

// Unauthenticated clients will receive a 401 Unauthorized response instead of
// the JSON data.
app.get( '/api', cas.block, function ( req, res ) {
    res.json( { success: true } );
});

// An example of accessing the CAS user session variable. This could be used to
// retrieve your own local user records based on authenticated CAS username.
app.get( '/api/user', cas.block, function ( req, res ) {
    res.json( { cas_user: req.session[ cas.session_name ] } );
});


// Unauthenticated clients will be redirected to the CAS login and then to the
// provided "redirectTo" query parameter once authenticated.
app.get( '/authenticate', cas.bounce_redirect );

// This route will de-authenticate the client with the Express server and then
// redirect the client to the CAS logout page.
app.get( '/logout', cas.logout );

//module.exports = cas;

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use('/todos', todoRoutes);
app.use('/students', studentRoutes);
app.use('/admins', adminRoutes);
app.use('/forms', formRoutes);
//app.use('/login', casRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
