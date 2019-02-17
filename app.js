const express = require('express');
var mongodb = require('mongodb');

const app = express();
const config = require('./db');
const PORT = 3000;

const testAPI = require('./api/test')

var db;
var coll;

// Initialize connection once

mongodb.MongoClient.connect(config.DB,{ useNewUrlParser: true }, function(err, client) {
  if(err) throw err;
  db = client.db('mytestingdb');

   testAPI(app, {db:db});
   console.log('database1', db);
   app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});
});


