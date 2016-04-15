//using https://github.com/daniel-nagy/md-data-table for sorting table
var app = angular.module ('books', ['ngMaterial', 'md.data.table']);
app.controller ('booksController', function ($scope, $http) {
	var url = 'http://localhost:23423/api/employees/2';
	$http.get (url)
		.then (function (res) {
			console.log (res.data);
			$scope.books = res.data[0].books;
		})
	;

});