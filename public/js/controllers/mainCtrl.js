app.controller('mainCtrl', function($scope, $http){

	//set 'this' to the variable self
	var self = this;


	//get data from server
	$http.get("/contactList")
	.then(function(dataResponse){
		console.log("GOT THE DATA FROM MY OWN API YAYAYAYAYAA");
		console.log("dataResponse ", dataResponse);
		self.contactList = dataResponse.data;
	});

	//post request
	self.addNewContact = function(){
		console.log("contact is requested - ", self.contact)

		//send the contact object to the server
		$http.post('/contactList', self.contact)
		.success(function(response){
				console.log("response ", response);

				//push new contact into array
				self.contactList.push(response);

				//clear inputs
				self.contact = "";
		});
	}

	// delete request
	self.removeContact = function(id){
		console.log("id ", id);
		//delete request
		$http.delete('/contactList/'+id)
		.success(function(response){
			console.log("delete response ", response);
			//remove the deleted contact from array
				var updatedArray = []

				self.contactList.map(function(item){
					if(item._id === id){
						console.log("thats it");
					} else {
						updatedArray.push(item)
					}
				})

				self.contactList = updatedArray;

					//make this more efficient with splice method or sumn

		});
	}




});