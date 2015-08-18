(function() {
    'use strict';

    angular
        .module('app.examples.ui')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/examples/ui');

        $stateProvider
        .state('admin-panel.default.ui-typography', {
            url: '/ui/typography',
            controller: 'TypographyController',
            templateUrl: 'app/ui/typography.tmpl.html',
        })
        .state('admin-panel.default.ui-colors', {
            url: '/ui/colors',
            controller: 'ColorsController',
            templateUrl: 'app/ui/colors.tmpl.html',
        })
        .state('admin-panel.default.ui-material-icons', {
            url: '/ui/material-icons',
            controller: 'MaterialIconsController',
            templateUrl: 'app/ui/material-icons.tmpl.html',
            resolve: {
                icons: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'elements/icons',
                    });
                }
            }
        })
        .state('admin-panel.default.ui-weather-icons', {
            url: '/ui/weather-icons',
            controller: 'WeatherIconsController',
            templateUrl: 'app/ui/weather-icons.tmpl.html'
        })
        .state('admin-panel.default.ui-fa-icons', {
            url: '/ui/fa-icons',
            controller: 'FaIconsController',
            templateUrl: 'app/ui/fa-icons.tmpl.html',
            resolve: {
                icons: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'elements/icons-fa',
                    });
                }
            }
        })

        .state('admin-panel.default.ui-toolbar', {
            url: '/ui/toolbars/:extraClass/:background/:shrink',
            controller: 'ToolbarsUIController',
            templateUrl: 'app/ui/toolbars.tmpl.html'
        })

        .state('admin-panel.default.ui-skins', {
            url: '/ui/skins',
            controller: 'SkinsUIController',
            templateUrl: 'app/ui/skins.tmpl.html'
        });

        triMenuProvider.addMenu({
            name: 'MENU.UI.UI',
            icon: 'icon-straighten',
            type: 'dropdown',
            priority: 3.2,
            children: [{
                name: 'MENU.UI.COLORS',
                state: 'admin-panel.default.ui-colors',
                type: 'link',
            },{
                name: 'MENU.UI.FONT_AWESOME',
                state: 'admin-panel.default.ui-fa-icons',
                type: 'link',
            },{
                name: 'MENU.UI.MATERIAL_ICONS',
                state: 'admin-panel.default.ui-material-icons',
                type: 'link',
            },{
                name: 'MENU.UI.SKINS',
                state: 'admin-panel.default.ui-skins',
                type: 'link',
            },{
                name: 'MENU.UI.TOOLBAR',
                state: 'admin-panel.default.ui-toolbar',
                params: {
                    extraClass: 'default',
                    background: 'off',
                    shrink: 'on'
                },
                type: 'link',
            },{
                name: 'MENU.UI.TYPOGRAPHY',
                state: 'admin-panel.default.ui-typography',
                type: 'link',
            },{
                name: 'MENU.UI.WEATHER_ICONS',
                state: 'admin-panel.default.ui-weather-icons',
                type: 'link',
            }]
        });
    }
})();