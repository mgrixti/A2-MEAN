var app = angular.module ('toDo', ['ngMaterial']);
app.controller ('toDoController', function ($scope, $http, $mdDialog) {

	//refresh todolist data
	function getToDoData () {
		$http.get (url)
			.then (function (res) {
				$scope.todo = res.data.todo;
			})
		;
	}
	var url = 'http://localhost:23423/api/todo/1';
	getToDoData ();

	//remove an entry in todolist for employee id
	$scope.removeEntry = function (entry) {
		console.log (url);
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
		todo.push ({
			id: todo.length,
			date: entry.date,
			description: entry.description,
			status: entry.status,
			priority: entry.priority
		});
	};
	
	//update an entry in todolist for employee id
	$scope.editEntry = function (entry) {
		//new updated data
		$scope.u = {
			date: entry.date,
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
				data = $.param ({
					date: u.date,
					description: u.description,
					status: u.status,
					priority: u.priority
				})
				$http.put (url + '/' + update.id, data)
					.success (function (res) {
						console.log (u.id + " updated");
						getToDoData ();
					})
					.error (function (res) {
						console.log ("Update failed");
					})
				;
			}
		}
	};

});