(function() {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        // Setup the apps routes

        // $stateProvider
        // .state('triangular.admin-default.test-page', {
        //     url: '/',
        //     templateUrl: 'app/test/test.tmpl.html',
        // });

        // 404 & 500 pages
        $stateProvider
        .state('404', {
            url: '/404',
            templateUrl: '404.tmpl.html',
            controllerAs: 'vm',
            controller: function($state) {
                var vm = this;
                vm.goHome = function() {
                    $state.go('admin-panel.default.dashboard-analytics');
                };
            }
        })

        .state('500', {
            url: '/500',
            templateUrl: '500.tmpl.html',
            controllerAs: 'vm',
            controller: function($state) {
                var vm = this;
                vm.goHome = function() {
                    $state.go('admin-panel.default.dashboard-analytics');
                };
            }
        });


        // set default routes when no path specified
        $urlRouterProvider.when('', '/introduction');
        $urlRouterProvider.when('/', '/introduction');

        // always goto 404 if route not found
        $urlRouterProvider.otherwise('/404');
    }
})();