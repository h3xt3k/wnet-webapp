'use strict';

angular.module('wnet.login', [])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'views/login/login.html',
            controller: 'loginController'
        });
    }])

    .controller('loginController', function ($scope, authService, $location) {
        $scope.user = {};
        $scope.login = function () {
            authService.authenticate().then(function () {
                if (authService.isAuthenticated()) {
                    $location.path("/home");
                }
            });

        }
    });