const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const session = require('express-session');
const CASAuthentication = require('cas-authentication');

const studentRoutes = require('./routes/students.route');
const adminRoutes = require('./routes/admins.route');
const todoRoutes = require('./routes/todos.route');
const formRoutes = require('./routes/forms.route');
const taskRoutes = require('./routes/tasks.route');
const classRoutes = require('./routes/classes.route');

const app = express();
app.use(cors());

// connect to mongo
connectDB();

app.use(bodyParser.json());

// // Set up an Express session -> CAS
// app.use(
//   session({
//     secret: 'L>fP@8G52tFYt?gx',
//     resave: false,
//     saveUninitialized: true
//   })
// );

// // Create new instance of CAS
// // Create a new instance of CASAuthentication.
// var cas = new CASAuthentication({
//   cas_url: 'https://websso.wwu.edu/cas',
//   service_url: 'https://gradprogmantest.herokuapp.com',
//   cas_version: '3.0',
//   renew: false,
//   is_dev_mode: false,
//   dev_mode_user: '',
//   dev_mode_info: {},
//   session_name: 'cas_user',
//   session_info: 'cas_userinfo',
//   destroy_session: false
// });

// mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
// const connection = mongoose.connection;

// connection.once('open', function() {
//   console.log('MongoDB database connection established successfully');
// });

// // set up protected routes for front end?
// app.get('/app', cas.bounce, function(req, res) {
//   res.send('<html><body>Hello!</body></html>');
// });

app.use('/todos', todoRoutes);
app.use('/students', studentRoutes);
app.use('/admins', adminRoutes);
app.use('/forms', formRoutes);
app.use('/tasks', taskRoutes);
app.use('/classes', classRoutes);

const PORT = 4000;

app.listen(PORT, () => `Server running on port ${PORT}`);
