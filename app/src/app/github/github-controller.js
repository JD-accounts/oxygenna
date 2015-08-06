(function() {
    'use strict';

    angular
        .module('triAngularGithub')
        .controller('GithubController', GithubController);

    /* @ngInject */
    function GithubController($http) {
        var oxygennaAPIUrl = 'http://192.168.56.101';
        var vm = this;
        vm.data = {
            purchaseCode: '',
            githubUser: '',
        };
        vm.register = register;
        vm.userSearch = userSearch;

        ////////////////

        function register() {
            // register-github-access
            console.log('register');
        }

        function userSearch (query) {
            return $http.get('https://api.github.com/search/users?q=' + query + '+type:user+in:login').
            then(function(response) {
                // get the items
                return response.data.items;
            });
        }
    }
})();