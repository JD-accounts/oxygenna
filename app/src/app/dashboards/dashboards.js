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
        url: '/dashboard1',
        templateUrl: 'app/dashboards/dashboard1.html',
    })
    .state('private.admin.toolbar.default.dashboard2', {
        url: '/dashboard2',
        templateUrl: 'app/dashboards/dashboard2.html',
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'Dashboards',
        icon: 'icon-home',
        type: 'dropdown',
        priority: 2.1,
        children: [{
            name: 'Dashboard 1',
            url: '/dashboard1',
            type: 'link',
        },{
            name: 'Dashboard 2',
            url: '/dashboard2',
            type: 'link',
        }]
    });
});
