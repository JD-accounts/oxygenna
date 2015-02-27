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
    .state('private.admin.dashboard1', {
        url: '/dashboard1',
        templateUrl: 'app/dashboards/dashboard1.html',
    })
    .state('private.admin.dashboard2', {
        url: '/dashboard2',
        templateUrl: 'app/dashboards/dashboard2.html',
    });
});
