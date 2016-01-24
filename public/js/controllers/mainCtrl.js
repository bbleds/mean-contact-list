app.controller('mainCtrl', function($scope, $http){

	// console.log("Hello world from the mainCtrl controller")

	var self = this;

	//get data from server
	$http.get("/contactList")
	.then(function(dataResponse){
		console.log("GOT THE DATA FROM MY OWN API YAYAYAYAYAA");
		console.log("dataResponse ", dataResponse);
		self.contactList = dataResponse.data;
	});





});