//using https://github.com/daniel-nagy/md-data-table for table
app.controller ('toDoController', function ($scope, $http, $mdDialog, $filter) {
	var url = 'api/todo/4';
	//refresh todolist data
	function getToDoData () {
		$http.get (url)
			.then (function (res) {
				$scope.todo = res.data.todo;
			})
		;
	}
	getToDoData ();

	//remove an entry in todolist for employee id
	$scope.removeEntry = function (entry) {
		$http.delete (url + '/' + entry.id)
			.success (function (res) {
				console.log (entry.id + " deleted");
				getToDoData ();
			})
			.error (function (res) {
				console.log ("Delete failed");
			})
		;
	};

	//add an entry in todolist for employee id
	$scope.addEntry = function (entry) {
		var data = $.param ({
			date: $filter ('date') (entry.date, 'M/d/yyyy'),
			description: entry.description,
			status: entry.status,
			priority: entry.priority
		});

		//post using http to insert data
		$http ({
			method: 'POST',
			url: url,
			data: data,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
			.success (function (data) {
				$scope.PostDataResponse = data;
				getToDoData ();
			})
			.error (function (data) {
				console.log ("Insert failed");
			})
		;
	};
	
	//update an entry in todolist for employee id
	$scope.editEntry = function (entry) {
		//new updated data
		$scope.u = {
			date: new Date (entry.date),
			description: entry.description,
			status: entry.status,
			priority: entry.priority
		};
		var update = { id: entry.id };

		//dialog popup to edit todolist entry
		$mdDialog.show ({
			parent: angular.element (document.body),
			scope: $scope,
			targetEvent: entry,
			clickOutsideToClose: true,
			controller: DialogController,
			templateUrl: 'formEdit.tmp1.html'
		});

		//controller to update entry in todolist for employee id
		function DialogController ($scope, $mdDialog) {
			$scope.saveEntry = function (u) {
				var data = $.param ({
					date: $filter ('date') (u.date, 'M/d/yyyy'),
					description: u.description,
					status: u.status,
					priority: u.priority
				});

				//put using http to update data
				$http ({
					method: 'PUT',
					url: url + '/' + update.id + '?' + data,
					data: data,
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				})
					.success (function (data) {
						$scope.ServerResponse = data;
						getToDoData ();
					})
					.error (function (data) {
						console.log ("Update failed");
					})
				;

				$mdDialog.hide ();
			}
		}
	};

	//order by date function
	$scope.orderByDate = function (entry) {
	    var parts = entry.date.split ('/');
	    var date = new Date(parseInt (parts[2]), 
	                        parseInt (parts[0]), 
	                        parseInt (parts[1]));

	    return date;
	};

});