(function() {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        // Setup the apps routes

        $stateProvider
        .state('triangular.admin-default.test-page', {
            url: '/',
            templateUrl: 'app/test/test.tmpl.html',
        });

        // set default routes when no path specified
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.when('/', '/');

        // always goto 404 if route not found
        $urlRouterProvider.otherwise('/404');
    }
})();