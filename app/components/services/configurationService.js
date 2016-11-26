angular.module('wnet.configuration', []).service('configurationService',
    function () {
        if (window.location.host.match(/localhost/)) {
            this.API = 'http://localhost:8082/api/',
                this.USER_AUTH = 'http://localhost:8082/login'
        }
        //TODO
        //change for server
        //TODO
    }
);