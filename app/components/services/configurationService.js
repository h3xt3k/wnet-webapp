angular.module('wnet.configuration', []).service('configurationService',
    function () {
        if (window.location.host.match(/localhost/)) {
            this.API = 'http://localhost:8082/'
        }
        //TODO
        //change for server
        //TODO
    }
);