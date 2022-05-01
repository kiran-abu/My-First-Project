/*var dash = require('appmetrics-dash');
dash.attach();*/

var express = require('express');
var app = express();
var http = require('http').Server(app);

var port = process.env.PORT || 5000;


var config = require("./config");
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

app.use('/public', express.static(__dirname + '/public'));

// app.use('/user', express.static(__dirname + '/public/views/user'));


// MongoDB driver
var MongoClient = require('mongodb').MongoClient;

//var dbURL = "mongodb://localhost/XRAYNEW";

var dbURL = config.databaseURL;

var dbName = config.dbName;


var database = config.database;
var db1 = config.db1;

MongoClient.connect(dbURL, function(err, db){
	console.log(dbURL)
	//config.databaseObject = db;
	if(err) {
		console.log("ERROR IN CONNECTING TO DB:", err);
	} else{
		config.database = db.db(config.dbName);
		
		config.database.collection("users").update({username:'admin'},{
			$set:{
				uid:'A0001',
				username:'admin',
				password:"admin",
				role:"admin",
				status:true
			}
		} ,{upsert : true});
		config.database.collection("users").update({username:'user'},{
			$set:{
				uid:'U0001',
				username:'user',
				password:"user",
				role:"user",
				status:true
			}
		} ,{upsert : true});
	}
});

app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods','GET,HEAD,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers','Content-Type,Authorization');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept");
	
	next();
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});
var path = require('path');
app.post('/login', function(req, res){console.log('req');
	let username = req.body.username;
	let password = req.body.password;
	//res.sendFile(__dirname + '/public/views/admin/admin.html');
	config.database.collection("users").find({"username":username,"password":password}).project({"_id":0}).toArray(function(err, result) {
		if (err) {
			res.send({'error':'Updates are not able to note.'});
		} else {console.log(result);
			if(result.length > 0){
				if(result[0].status == true){
					if(result[0].role == 'admin'){
						res.sendFile(__dirname + '/public/views/admin/admin.html');
					}else if(result[0].role == 'user'){
						res.sendFile(__dirname + '/public/views/user/user.html');
						//path.join(__dirname, '../assets', 'index.html')
						//res.sendFile(path.join(__dirname, '/public/views/user/user.html'), options);
					}
				}else{
					res.send({'inactive':'inactive user'});
				}
			}else{
				res.send({'invalid':'invalid username and password'});
			}
		}
	});
});

var adminRouter = require('./Router/adminRouter');
var userRouter = require('./Router/userRouter')

app.use('/admin', adminRouter);
app.use('/user', userRouter);

http.listen(port, function(){
	
  console.log('listening on *:' + port);
});
