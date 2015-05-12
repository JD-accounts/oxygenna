'use strict';

/**
 * @ngdoc module
 * @name triangular.authentication
 * @description
 *
 * The `triangular.authentication` module handles all the login and signup pages
 */
angular.module('triAngularDashboards', [])
.config(function ($translatePartialLoaderProvider, $stateProvider) {
    $translatePartialLoaderProvider.addPart('app/dashboards');

    $stateProvider
    .state('private.admin.toolbar.default.dashboard-general', {
        url: '/dashboards/general',
        templateUrl: 'app/dashboards/dashboard-general.tmpl.html',
    })
    .state('private.admin.toolbar.default.dashboard-analytics', {
        url: '/dashboards/analytics',
        templateUrl: 'app/dashboards/dashboard-analytics.tmpl.html',
    })
    .state('private.admin.toolbar.default.dashboard-server', {
        url: '/dashboards/server',
        controller: 'DashboardServerController',
        templateUrl: 'app/dashboards/dashboard-server.tmpl.html',
    })

    .state('private.admin.toolbar.default.dashboard1', {
        url: '/dashboard',
        templateUrl: 'app/dashboards/dashboard1.html',
        controller: 'DashboardController'
    })
    .state('private.admin.toolbar.default.dashboard2', {
        url: '/dashboard2',
        templateUrl: 'app/dashboards/dashboard2.tmpl.html',
    })
    .state('private.admin.toolbar.default.dashboard3', {
        url: '/dashboard3',
        templateUrl: 'app/dashboards/dashboard3.tmpl.html',
    })
    .state('private.admin.toolbar.default.widgets', {
        url: '/dashboards/widgets',
        templateUrl: 'app/dashboards/widgets.tmpl.html',
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'MENU.DASHBOARDS.DASHBOARDS',
        icon: 'icon-home',
        type: 'dropdown',
        priority: 2.1,
        children: [{
            name: 'MENU.DASHBOARDS.GENERAL',
            url: '/dashboards/general',
            type: 'link',
        },{
            name: 'MENU.DASHBOARDS.ANALYTICS',
            url: '/dashboards/analytics',
            type: 'link',
        },{
            name: 'MENU.DASHBOARDS.SERVER',
            url: '/dashboards/server',
            type: 'link',
        },{
            name: 'MENU.DASHBOARDS.WIDGETS',
            url: '/dashboards/widgets',
            type: 'link',
        }]
    });
});
