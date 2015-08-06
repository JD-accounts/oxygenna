(function() {
    'use strict';

    angular
        .module('triAngularGithub')
        .controller('GithubController', GithubController);

    /* @ngInject */
    function GithubController() {
        var vm = this;
        vm.title = 'GithubController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();