app = angular.module ('myapp', ['ngMaterial', 'md.data.table', 'ngRoute', 'ngCookies']);

app.config(function($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('../svg/mdi.svg');
});

app.config (['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when ('/main', {
			templateUrl: 'main.html'
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
		.accentPalette('purple');
});