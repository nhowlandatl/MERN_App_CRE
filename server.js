// 'require' loads the module

const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');


const app = express(); // this is the 'express' framework, which has methods for routing HTTP requests, configuring middleware
// rendering HTML views, registering a template engine, and modifying app settings.
// app.get specifies a callback function for HTTP get requests with a specified path. 
// E.g.:
    // app.get('/', function(req, res) {
        // res.send('Hello World!');
    // This takes a request and a response object as arguments,a nd calls send() on the response to return the string "Hello world!""


// Bodyparser Middleware
app.use(bodyParser.json());

// Database Config

const db = require('./config/keys').mongoURI;

// Connect to MongoDB

mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000; // need to setup for Hiroku

app.listen(port, () => console.log(`Server started on port ${port}`));