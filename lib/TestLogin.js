/**
 * Created by josep on 2016-04-09.
 */
    var app = angular.module('app', ['ngMaterial', 'ngMessages']);

    app.controller('AppCtrl', function ($scope, $http){
        var un = $scope.username;
        var pw = $scope.password;

        $scope.asd = function () {
            console.log();
            $http({ method: 'POST',
                    url: 'http://localhost:23423/api/employees',
                    data:{username:$scope.username,password:$scope.password},
                    header:{'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}  }
            ).
            success (function (data){
                console.log(data);
                if (data == 1)
                {
                    alert("Invalid username and password");
                }
            }).error(function (data){
                console.log("Cannot reach servers at the moment. Please contact us at 1-800-It's matt's fault");
            });

    };
    });



