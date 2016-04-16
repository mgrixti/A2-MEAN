<!-- Easter Egg-->

app.controller ('aboutController', function ($scope, $mdDialog) {
    $scope.clippyValue = '100';
    $(function(){
        setTimeout(function(){
            $mdDialog.show ({
                parent: angular.element (document.body),
                scope: $scope,
                clickOutsideToClose: true,
                templateUrl: 'clippy.tmp1.html'
            });
        }, 7000); });

    $scope.clippyHide = function () {
        $mdDialog.hide ();
    };
});