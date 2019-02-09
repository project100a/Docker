const express = require('express');
const app = express();
const mongoose = require('mongoose');


const config = require('./db');
const PORT = 3000;

mongoose.connect(config.DB, function(err, db) {
    if(err) {
        console.log('database is not connected')
    }
    else {
        console.log('connected!!')
    }
});

app.get('/', function(req, res) {
    res.json({"hello": "world"});
});

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});