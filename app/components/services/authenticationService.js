angular.module('wnet.auth', []).service('authService',
    function ($location, $http, $sessionStorage, configurationService) {
        var redirectToHome = false;
        this.authenticate = function (credentials) {
            var headers = credentials ? {
                authorization: "Basic "
                + btoa(credentials.username + ":" + credentials.password)
            } : {};
            $sessionStorage.headers = headers;
            return this.updateUser();

        };
        this.updateUser = function () {
            return $http.get(configurationService.USER_AUTH, {headers: $sessionStorage.headers}).then(function (response) {
                if (response.data.authenticated) {
                    $sessionStorage.user = response.data.user;
                    $sessionStorage.authenticated = true;
                    if (redirectToHome == true) {
                        $location.path("/home");
                        redirectToHome = true;
                    }
                } else {
                    $sessionStorage.authenticated = false;
                    alert('go away!')
                }
            }, function () {
                $sessionStorage.authenticated = false;
                alert('go away!')
            });
        };
        this.isAuthenticated = function () {
            return redirectToHome;
        }
    });