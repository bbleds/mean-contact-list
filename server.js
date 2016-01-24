//require express via common js format
var express = require("express");

//set app to express module
var app = express();


//test the server
//==========================================
				//check that server is running
					//when index file is requested, send hello world response to page
				// app.get('/', function( req, res){
				// 	res.send("hello world, from server.js");
				// });
//==========================================

//tell

//listen on port 3000
app.listen(3000);
console.log("server running on port 3000, ya filthy animal");