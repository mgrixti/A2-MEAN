/**
 * Created by josep on 2016-04-09.
 */
    app.controller('loginController', function ($scope, $http, $window, $mdDialog, $cookieStore){
        var url = '/loggedin';
        
        $scope.titleBar = 'Login';
        $scope.fabHide = true;
        $scope.logoutHide = true;
            
        $http.get (url)
            .then (function (res) {
                if (res.data == 'yes') {
                    $window.location.href = "/#/main";
                }
            })
        ;

        $scope.login = function (event) {
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
                        $cookieStore.put ('employeeId', data.id);
                        $window.location.href = "/#/main";
                    }

            }).error(function (){
                console.log("Cannot reach servers at the moment. Please contact us at 1-800-It's matt's fault");
            });

    };
    });