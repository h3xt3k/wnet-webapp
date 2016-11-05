'use strict';
angular.module('wnet.home', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home/home.html',
            controller: 'homeController'
        });
    }])
    .controller('homeController', function ($scope, authService) {


    });