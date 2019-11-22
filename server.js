const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const basicAuth = require('express-basic-auth');

const studentRoutes = require('./routes/students.route');
const adminRoutes = require('./routes/admins.route');
const todoRoutes = require('./routes/todos.route');
const formRoutes = require('./routes/forms.route');
const taskRoutes = require('./routes/tasks.route');
const classRoutes = require('./routes/classes.route');
const taassignmentRoutes = require('./routes/taassignments.route');

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://mongo:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// app.use(basicAuth({
//     users: {'admin': 'secret'},
//     challenge: true
// }))

app.use('/todos', todoRoutes);
app.use('/students', studentRoutes);
app.use('/admins', adminRoutes);
app.use('/forms', formRoutes);
app.use('/tasks', taskRoutes);
app.use('/classes', classRoutes);
app.use('/tassignment', taassignmentRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

https.createServer()
