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
    .state('admin-panel.default.maps-fullwidth', {
        url: '/maps/fullwidth',
        templateUrl: 'app/maps/maps-fullwidth.tmpl.html',
        controller: 'MapController'
    })
    .state('admin-panel.default.maps-demos', {
        url: '/maps/demos',
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
            state: 'admin-panel.default.maps-fullwidth',
            type: 'link',
        },{
            name: 'MENU.MAPS.DEMOS',
            state: 'admin-panel.default.maps-demos',
            type: 'link',
        }]
    });
});
