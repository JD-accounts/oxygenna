(function() {
    'use strict';

    angular
        .module('triAngularGithub')
        .controller('GithubController', GithubController);

    /* @ngInject */
    function GithubController($http, $mdToast) {
        var oxygennaAPIUrl = 'http://192.168.56.101';
        var vm = this;
        vm.data = {
            id: '11711437',
            purchaseCode: '',
            githubUser: '',
        };
        vm.register = register;
        vm.userSearch = userSearch;

        clearForm();

        ////////////////

        function register() {
            $http.put(oxygennaAPIUrl + '/register-github-access', vm.data).
            then(function(response) {
                console.log(response);
            }, function(response) {
                if(response.data.error !== undefined) {
                    popAToast(response.data.error).then(function() {
                        console.log('ok!')
                    });
                }
            });
        }

        function userSearch (query) {
            return $http.get('https://api.github.com/search/users?q=' + query + '+type:user+in:login').
            then(function(response) {
                // get the items
                return response.data.items;
            });
        }

        function clearForm() {
            vm.data.purchaseCode = '';
            vm.data.githubUser = '';
        }

        function popAToast(message) {
            var toast = $mdToast.simple({
                hideDelay: false
            })
            .content(message)
            .action('OK')
            .highlightAction(false)
            .position('bottom right');

            return $mdToast.show(toast);
        }

    }
})();