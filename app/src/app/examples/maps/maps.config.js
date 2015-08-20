(function() {
    'use strict';

    angular
        .module('app.examples.maps')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, uiGmapGoogleMapApiProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/examples/maps');

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

        triMenuProvider.addMenu({
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
    }
})();