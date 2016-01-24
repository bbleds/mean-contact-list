app.controller('mainCtrl', function($scope, $http){

	console.log("Hello world from the mainCtrl controller")

	var self = this;

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

			self.contactList = [person1, person2, person3]

});