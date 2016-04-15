//using https://github.com/daniel-nagy/md-data-table for table
app.controller ('messagesController', function ($scope, $http, $mdDialog, $sce) {
	var url = 'http://localhost:23423/api/employees/2';
	$http.get (url)
		.then (function (res) {
			$scope.messages = res.data[0].messages;
		})
	;

	//sort by date
	$scope.orderByDate = function (message) {
	    var parts = message.date.split ('/');
	    var date = new Date(parseInt (parts[2]), 
	                        parseInt (parts[0]), 
	                        parseInt (parts[1]));

	    return date;
	};

	//click university name to open dialog
	$scope.viewMessage = function (message) {
		$scope.details = {
			name: message.contact[0].university[0].name,
			address: message.contact[0].university[0].address,
			city: message.contact[0].university[0].city,
			state: message.contact[0].university[0].state,
			zip: message.contact[0].university[0].zip,
			website: message.contact[0].university[0].website,
			latitude: message.contact[0].university[0].latitude,
			longitude: message.contact[0].university[0].longitude
		};

		//set google maps url
		$scope.mapsUrl = $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/view?key=AIzaSyC5XcbgwysOIUFdFnp_NPwVqCIKSfEBtUU&center=' +
				message.contact[0].university[0].latitude + ',' + message.contact[0].university[0].longitude + '&zoom=15');
		

		//dialog popup to edit todolist entry
		$mdDialog.show ({
			parent: angular.element (document.body),
			scope: $scope,
			targetEvent: message,
			clickOutsideToClose: true,
			templateUrl: 'message.tmp1.html'
		});
	};


});