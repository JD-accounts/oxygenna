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
    .state('admin-panel.default.google-bar', {
        url: '/charts/google/bar',
        templateUrl: 'app/charts/google-bar.tmpl.html'
    })
    .state('admin-panel.default.google-scatter', {
        url: '/charts/google/scatter',
        templateUrl: 'app/charts/google-scatter.tmpl.html'
    })
    .state('admin-panel.default.google-line', {
        url: '/charts/google/line',
        templateUrl: 'app/charts/google-line.tmpl.html'
    })
    .state('admin-panel.default.chartjs-bar', {
        url: '/charts/chartjs/bar',
        templateUrl: 'app/charts/chartjs-bar.tmpl.html'
    })
    .state('admin-panel.default.chartjs-pie', {
        url: '/charts/chartjs/pie',
        templateUrl: 'app/charts/chartjs-pie.tmpl.html'
    })
    .state('admin-panel.default.chartjs-ticker', {
        url: '/charts/chartjs/ticker',
        templateUrl: 'app/charts/chartjs-ticker.tmpl.html'
    })
    .state('admin-panel.default.chartjs-line', {
        url: '/charts/chartjs/line',
        templateUrl: 'app/charts/chartjs-line.tmpl.html'
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
        },{
            name: 'MENU.CHARTS.CHARTJS',
            type: 'dropdown',
            children: [{
                name: 'MENU.CHARTS.BAR',
                url: '/charts/chartjs/bar',
                type: 'link',
            },{
                name: 'MENU.CHARTS.LINE',
                url: '/charts/chartjs/line',
                type: 'link',
            },{
                name: 'MENU.CHARTS.PIE',
                url: '/charts/chartjs/pie',
                type: 'link',
            },{
                name: 'MENU.CHARTS.TICKER',
                url: '/charts/chartjs/ticker',
                type: 'link',
            }]
        }]
    });
});
