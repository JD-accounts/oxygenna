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
    .state('private.admin.toolbar.default.dashboard1', {
        url: '/dashboard',
        templateUrl: 'app/dashboards/dashboard1.html',
        controller: 'DashboardController'
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'MENU.DASHBOARDS.DASHBOARDS',
        icon: 'icon-home',
        type: 'dropdown',
        priority: 2.1,
        children: [{
            name: 'MENU.DASHBOARDS.DASHBOARD',
            url: '/dashboard',
            type: 'link',
        }]
    });
});
