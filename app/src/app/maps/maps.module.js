'use strict';

/**
 * @ngdoc module
 * @name triangular.authentication
 * @description
 *
 * The `triangular.authentication` module handles all the login and signup pages
 */
angular.module('triAngularMaps', ['uiGmapgoogle-maps'])
.config(function ($translatePartialLoaderProvider, $stateProvider, uiGmapGoogleMapApiProvider) {
    $translatePartialLoaderProvider.addPart('app/maps');

    $stateProvider
    .state('admin.toolbar.default.fullwidth', {
        url: '/fullwidth',
        templateUrl: 'app/maps/maps-fullwidth.tmpl.html',
        controller: 'MapController'
    })
    .state('admin.toolbar.default.demos', {
        url: '/demos',
        templateUrl: 'app/maps/maps-demo.tmpl.html',
    });

    uiGmapGoogleMapApiProvider.configure({
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'MENU.MAPS.MAPS',
        icon: 'icon-place',
        type: 'dropdown',
        priority: 7.1,
        children: [{
            name: 'MENU.MAPS.FULLWIDTH',
            url: '/fullwidth',
            type: 'link',
        },{
            name: 'MENU.MAPS.DEMOS',
            url: '/demos',
            type: 'link',
        }]
    });
});
