var app = angular.module ('toDo', ['ngMaterial']);
var todo = [
	{
		id: "0",
		date: "01/01/01",
		description: "todo 1",
		status: "completed",
		priority: "low"
	},
	{
		id: "1",
		date: "01/01/01",
		description: "todo 2",
		status: "completed",
		priority: "low"
	},
	{
		id: "2",
		date: "01/01/01",
		description: "todo 3",
		status: "completed",
		priority: "low"
	},
	{
		id: "3",
		date: "01/01/01",
		description: "todo 4",
		status: "completed",
		priority: "low"
	}
];

app.controller ('toDoController', function ($scope, $http, $mdDialog) {
	$scope.todo = todo;
	$scope.removeEntry = function (entry) {
		for (var i = 0; i < todo.length; i++) {
			if (todo[i].id == entry.id) {
				todo.splice (i, 1);
				break;
			}
		}
	};
	$scope.addEntry = function (entry) {
		todo.push ({
			id: todo.length,
			date: entry.date,
			description: entry.description,
			status: entry.status,
			priority: entry.priority
		});
	};
	$scope.editEntry = function (entry) {
		$scope.u = {
			id: entry.id,
			date: entry.date,
			description: entry.description,
			status: entry.status,
			priority: entry.priority
		};
		update = { id: entry.id };
		$mdDialog.show ({
			parent: angular.element (document.body),
			scope: $scope,
			targetEvent: entry,
			clickOutsideToClose: true,
			controller: DialogController,
			templateUrl: 'formEdit.tmp1.html'
		});
		function DialogController ($scope, $mdDialog) {
			$scope.saveEntry = function (u) {
				for (var i = 0; i < todo.length; i++) {
					if (todo[i].id == update.id) {
						todo[i].date = u.date;
						todo[i].description = u.description;
						todo[i].status = u.status;
						todo[i].priority = u.priority;
						$mdDialog.hide ();
						break;
					}
				}
			}
		}
	};

});