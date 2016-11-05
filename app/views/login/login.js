'use strict';

angular.module('wnet.login', [])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'views/login/login.html',
            controller: 'loginController'
        });
    }])

    .controller('loginController', function ($scope, authService) {
        $scope.user = {};
        $scope.login = function () {
            authService.authenticate();
        }


    });