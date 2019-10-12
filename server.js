const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const studentRoutes = require('./routes/students.route');
const adminRoutes = require('./routes/admins.route');
const todoRoutes = require('./routes/todos.route');
const formRoutes = require('./routes/forms.route');
const taskRoutes = require('./routes/tasks.route');
const classRoutes = require('./routes/classes.route');

// Listens to defined port, defaults to 5000
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log('MongoDB database connection established successfully');
});

app.use('/todos', todoRoutes);
app.use('/students', studentRoutes);
app.use('/admins', adminRoutes);
app.use('/forms', formRoutes);
app.use('/tasks', taskRoutes);
app.use('/classes', classRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

https.createServer();
