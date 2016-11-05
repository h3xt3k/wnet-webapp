'use strict';
angular.module('wnet', [
    'ngRoute',
    'wnet.login'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/login'});
}]);
