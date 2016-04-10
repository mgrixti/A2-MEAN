/**
 * Created by josep on 2016-04-09.
 */

    var app = angular.module('app', []);

    app.controller('main', function ($scope){
        $scope.login = function(){
            var un = $scope.userName;
            var pw = $scope.password;

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
        }
    });
