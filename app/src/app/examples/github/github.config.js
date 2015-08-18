(function() {
    'use strict';

    angular
        .module('app.examples.github')
        .config(config);

    /* @ngInject */
    function config($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/examples/github');

        $stateProvider
        .state('admin-panel.default.github', {
            url: '/github',
            templateUrl: 'app/github/github.tmpl.html',
            controller: 'GithubController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            name: 'MENU.GITHUB.GITHUB',
            state: 'admin-panel.default.github',
            type: 'link',
            icon: 'fa fa-github',
            priority: 1.1
        });
        triMenuProvider.addMenu({
            type: 'divider',
            priority: 1.2
        });
    }
})();