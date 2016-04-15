/**
 * Created by josep on 2016-04-09.
 */

    var app = angular.module('app', ['ngMaterial', 'ngMessages']);
    app.controller('AppCtrl', function ($scope, $http){
        var un = $scope.username;
        var pw = $scope.password;

        $scope.asd = function () {
            $http({ method: 'POST',
                    url: '/login',
                    data: $.param({username: $scope.username, password: $scope.password}),
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'}  }
            ).
            success (function (data){
                if (data == 1)
                {
                    alert("Invalid username and password");
                }
            }).error(function (){
                console.log("Cannot reach servers at the moment. Please contact us at 1-800-It's matt's fault");
            });

    };
    });



