/**
 * Created by josep on 2016-04-09.
 */

    var app = angular.module('app', ['ngMaterial', 'ngMessages']);
    app.controller('AppCtrl', function ($scope, $http, $window, $mdDialog){

        $scope.login = function (event) {
            console.log();
            $http({ method: 'POST',
                    url: '/login',
                    data: $.param({username: $scope.username, password: $scope.password}),
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'}  }
            ).
            success (function (data){
                if (data == 'error') {
                    $mdDialog.show(
                        $mdDialog.alert()
                            .title('Invalid username/password')
                            .textContent('Please check your username and password.')
                            .ok('Ok')
                            .targetEvent(event)
                    )
                }
                    else {
                        console.log();
                    document.cookie="id=" + data.id;
                        $window.location.href = "/";
                    }

            }).error(function (){
                console.log("Cannot reach servers at the moment. Please contact us at 1-800-It's matt's fault");
            });

    };
    });



