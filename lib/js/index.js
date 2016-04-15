var app = angular.module ('myapp', ['ngMaterial', 'md.data.table']);

app.config(function($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('../svg/mdi.svg')
});