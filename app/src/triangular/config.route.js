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
            templateUrl: 'triangular/layouts/default/default.tmpl.html',
            controller: 'AdminController',
            controllerAs: 'adminController'
        })
        .state('triangular.admin-default', {
            abstract: true,
            views: {
                sidebarLeft: {
                    templateUrl: 'triangular/components/menu/menu.tmpl.html',
                    controller: 'MenuController',
                    controllerAs: 'menuController'
                },
                sidebarRight: {
                    templateUrl: 'triangular/components/sidebar-right/sidebar-right.tmpl.html',
                    // controller: 'SidebarRightController'
                },
                toolbar: {
                    templateUrl: 'triangular/components/toolbars/default.tmpl.html',
                    // controller: 'DefaultToolbarController'
                },
                content: {
                    template: '<div id="admin-panel-content-view" flex ui-view></div>'
                }
            },
        });
    }
})();