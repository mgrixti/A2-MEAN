/**
 * Created by josep on 2016-04-09.
 */

    var app = angular.module('app', ['ngMaterial', 'ngMessages']);

    app.controller('AppCtrl', function ($scope, $http){
        var un = $scope.userName;
        var pw = $scope.password;

        $scope.login = function(){


            if (un == null)
            {
                $scope.UsernameProblem = "Please enter a Username";
                $scope.unProb = true;
            }
            if (pw == null)
            {
                $scope.PasswordProblem = "Please enter a Password";
                $scope.pwProb = true;
            }


        };

        $scope.asd = function () {
            $http({ method: 'POST', url: 'http://localhost:23423/api/employees'}).
            success (function (data){
                console.log("FUCK YOU " + data)
            }).error(function (data){

            });
    };
    });



