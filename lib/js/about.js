<!-- Easter Egg-->

app.controller ('aboutController', function ($scope, $mdDialog, $timeout, $rootScope) {
    $scope.clippyValue = '100';
    var clippyTimer = $timeout (function(){
            $mdDialog.show ({
                parent: angular.element (document.body),
                scope: $scope,
                clickOutsideToClose: true,
                templateUrl: 'clippy.tmp1.html'
            });
        }, 7000);

    $rootScope.$on ('$routeChangeStart', function (event, next, start) {
        $timeout.cancel (clippyTimer);
    });

    $scope.clippyHide = function () {
        $mdDialog.hide ();
    };
});