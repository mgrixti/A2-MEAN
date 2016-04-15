//using https://github.com/daniel-nagy/md-data-table for sorting table
app.controller ('booksController', function ($scope, $http) {
	var url = 'api/employees/2';
	$http.get (url)
		.then (function (res) {
			console.log (res.data);
			$scope.books = res.data[0].books;
		})
	;
});