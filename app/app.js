'use strict';
angular.module('wnet', [
    'ngRoute',
    'ngStorage',
    'wnet.login',
    'wnet.auth',
    'wnet.configuration'
]).config(function ($httpProvider, $locationProvider) {
    $locationProvider.hashPrefix("!");
    $locationProvider.html5Mode(false);
    $httpProvider.defaults.headers.common = {};
    // $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
});
