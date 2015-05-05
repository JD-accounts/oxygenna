'use strict';

/**
 * @ngdoc module
 * @name triAngularCharts
 * @description
 *
 * The `triAngularCharts` module handles shows off the charts available
 */
angular.module('triAngularCharts', [])
.config(function ($translatePartialLoaderProvider, $stateProvider) {
    $translatePartialLoaderProvider.addPart('app/charts');

    $stateProvider
    .state('private.admin.toolbar.default.google-bar', {
        url: '/charts/google/bar',
        templateUrl: 'app/charts/google-bar.tmpl.html'
    })
    .state('private.admin.toolbar.default.google-scatter', {
        url: '/charts/google/scatter',
        templateUrl: 'app/charts/google-scatter.tmpl.html'
    })
    .state('private.admin.toolbar.default.google-line', {
        url: '/charts/google/line',
        templateUrl: 'app/charts/google-line.tmpl.html'
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'MENU.CHARTS.CHARTS',
        icon: 'icon-insert-chart',
        type: 'dropdown',
        priority: 5.1,
        children: [{
            name: 'MENU.CHARTS.GOOGLE',
            type: 'dropdown',
            children: [{
                name: 'MENU.CHARTS.BAR',
                url: '/charts/google/bar',
                type: 'link',
            },{
                name: 'MENU.CHARTS.SCATTER',
                url: '/charts/google/scatter',
                type: 'link',
            },{
                name: 'MENU.CHARTS.LINE',
                url: '/charts/google/line',
                type: 'link',
            }]
        }]
    });
});
