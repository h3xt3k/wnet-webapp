'use strict';
angular.module('wnet', [
    'ngRoute',
    'ngStorage',
    'wnet.login',
    'wnet.auth',
    'wnet.configuration'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/login'});
}]);
