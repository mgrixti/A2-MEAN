app.controller ('mainController', function ($scope, $http, $window) {
	var url = '/loggedin';

	
	
	$http.get (url)
		.then (function (res) {
			if (res.data == 'yes') {
				$scope.showContent = true;
			} else {
				$scope.showContent = false;
				$window.location.href = "/#/login";
			}
		})
	;
});