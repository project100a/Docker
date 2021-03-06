const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

const config = require('./db');
const testAPI = require('./api/test')

const app = express();
const PORT = 3000;
var db;
//test git resul
//test comflict result
//test git result
app.use(bodyParser.json());

mongodb.MongoClient.connect(config.DB,{ useNewUrlParser: true }, function(err, client) {
	if(err) throw err;
	db = client.db('mytestingdb');
	testAPI(app, {db:db});
	app.listen(PORT, function(){
		console.log('Your node js server is running on PORT:',PORT);
	});
});


