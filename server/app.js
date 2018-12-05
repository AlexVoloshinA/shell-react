const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const products = require('./routes/products');

const app = express();


var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // allow requests from any other server
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // allow these verbs
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control") 
next()};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(allowCrossDomain); // plumbing it in as middleware
    
// Import routes
app.use('/products', products);




module.exports = app;