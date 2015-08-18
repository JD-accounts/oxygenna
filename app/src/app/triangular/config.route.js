(function() {
    'use strict';

    angular
        .module('triangular')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('triangular', {
            abstract: true,
            templateUrl: 'app/triangular/layouts/default/default.tmpl.html',
            controller: 'AdminController',
            controllerAs: 'adminController'
        })
        .state('triangular.admin-default', {
            abstract: true,
            views: {
                sidebarLeft: {
                    templateUrl: 'app/triangular/components/menu/menu.tmpl.html',
                    controller: 'MenuController',
                    controllerAs: 'menuController'
                },
                sidebarRight: {
                    templateUrl: 'app/triangular/components/sidebar-right/sidebar-right.tmpl.html',
                    // controller: 'SidebarRightController'
                },
                toolbar: {
                    templateUrl: 'app/triangular/components/toolbars/default.tmpl.html',
                    // controller: 'DefaultToolbarController'
                },
                content: {
                    template: '<div id="admin-panel-content-view" flex ui-view></div>'
                }
            },
        });
    }
})();