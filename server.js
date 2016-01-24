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

//tell express which template to use as index, and we are telling express to look for static files like html css and js
	//location is found in static(locationFoundHere), we will put everything in a folder called public
app.use(express.static(__dirname+"/public"));

//listen for get request on route '/contactList'
app.get("/contactList", function(req, res){
	console.log("I received a get request");

		//dummy data to play with
			var person1 =    {
				name : "tim",
				email : "t@t.com",
				phone : "111-111-1111"
			}

			var person2 =    {
				name : "emily",
				email : "e@e.com",
				phone : "111-111-1111"
			}

			var person3 =    {
				name : "John",
				email : "j@j.com",
				phone : "111-111-1111"
			}

		var contactList = [person1, person2, person3];

		// send response back in json
		res.json(contactList);

});


//listen on port 3000
app.listen(3000);
console.log("server running on port 3000, ya filthy animal");