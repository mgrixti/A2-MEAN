app = angular.module ('myapp', ['ngMaterial', 'md.data.table', 'ngRoute', 'ngCookies']);

app.config(function($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('../svg/mdi.svg');
});

app.config (['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when ('/main', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		.when ('/login', {
			templateUrl: 'login.html',
			controller: 'loginController'
		})
		.when('/about', {
			templateUrl: 'about.html',
		})
		.otherwise({
        	redirectTo: '/login'
      	})
	;
}]);

app.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('purple')
		.accentPalette('deep-purple');
});

// app.controller ('toolbarController', function ($scope, $http, $cookieStore, $location) {
	// if ($location.url () == '/main') {
	// 	var url = 'api/employees/' + $cookieStore.get ('employeeId');
	// 	$http.get (url)
	// 		.then (function (res) {
	// 			$scope.titleBar = 'Employee Dashboard - Welcome ' + res.data[0].username + '!';
	// 		})
	// 	;
	// 	$scope.fabHide = false;
	// 	$scope.logoutHide = false;
	// } else if ($location.url () == '/about') {
	// 	$scope.titleBar = 'About';
	// 	$scope.fabHide = false;
	// 	$scope.logoutHide = false;
	// } else {
	// 	$scope.titleBar = 'Login';
	// 	$scope.fabHide = true;
	// 	$scope.logoutHide = true;
	// }
// });

app.controller ('toolbarController', function ($scope, $http, $cookieStore, $location, $rootScope) {
	$rootScope.$on ("$routeChangeStart", function (event, next, current) {
		if ($location.url () == '/main') {
			var url = 'api/employees/' + $cookieStore.get ('employeeId');
			$http.get (url)
				.then (function (res) {
					$scope.titleBar = 'Employee Dashboard - Welcome ' + res.data[0].username + '!';
				})
			;
			$scope.fabHide = false;
			$scope.logoutHide = false;
			$scope.logoutIconHide = false;
		} else if ($location.url () == '/about') {
			$scope.titleBar = 'About';
			$scope.fabHide = false;
			$scope.logoutHide = false;
			$scope.logoutIconHide = false;
		} else {
			$scope.titleBar = 'Login';
			$scope.fabHide = true;
			$scope.logoutHide = true;
			$scope.logoutIconHide = true;
		}
	});
});