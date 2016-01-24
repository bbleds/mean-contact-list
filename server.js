//require express via common js format
var express = require("express");
//set app to express module
var app = express();
//require mongo.js module
var mongojs = require("mongojs");
//db -> set which mongodb database and collection we will be using
var db = mongojs("contactList", ['contactList']);
//body parser
var bodyParser = require("body-parser");



//test the server
//==========================================
				//check that server is running
					//when index file is requested, send hello world response to page
				// app.get('/', function( req, res){
				// 	res.send("hello world, from server.js");
				// });
//==========================================

//tell express which template to use as index, and we are telling express to look for static files like html css and js
	//location is found in static(locationFoundHere), we will put everything in a folder called public
app.use(express.static(__dirname+"/public"));
//used to parse the body of post requests into JSON
app.use(bodyParser.json());

//listen for get request on route '/contactList'
app.get("/contactList", function(req, res){
	console.log("I received a get request");

	//have server interact with mongo, find data from contactList db and collection
		//docs means it will respond with the documents from db (e.g. the contacts)
	db.contactList.find(function(err,docs){
		console.log("docs", docs)
		res.json(docs);
	})

});

//listen for post data
app.post('/contactList', function(req, res){
	console.log("I received a post request");
	console.log("request ", req.body);

	//insert into mongodb
		//doc is the item we are posting
	db.contactList.insert(req.body, function(err,doc){

			//in addition to posting, send data back to ctrlr on callback
			res.json(doc);
	});


})


//listen on port 3000
app.listen(3000);
console.log("server running on port 3000, ya filthy animal");