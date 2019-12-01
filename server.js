const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log('MongoDB database connection established successfully');
});

// Init Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/todos', require('./routes/todos.route'));
app.use('/students', require('./routes/students.route'));
app.use('/admins', require('./routes/admins.route'));
app.use('/forms', require('./routes/forms.route'));
app.use('/tasks', require('./routes/tasks.route'));
app.use('/classes', require('./routes/classes.route'));
app.use('/tassignment', require('./routes/taassignments.route'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
  console.log('Server is running on Port: ' + PORT);
});

https.createServer();
