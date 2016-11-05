'use strict';

angular.module('wnet.login', [])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'loginController'
        });
    }])

    .controller('loginController', [function () {

    }]);