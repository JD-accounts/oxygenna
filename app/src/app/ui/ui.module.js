'use strict';

/**
 * @ngdoc module
 * @name triAngularUI
 * @description
 *
 * The `triAngularUI` module adds an UI pages
 */
angular.module('triAngularUI', ['ngCookies', 'hljs', 'webfont-loader'])
.constant('UI_FONTS', [{
    name: 'Roboto Draft',
    family: 'RobotoDraft',
    google: 'RobotoDraft:300,400,500,700,400italic'
},{
    name: 'Noto Sans',
    family: 'Noto Sans',
    google: 'Noto+Sans:400,700,400italic'
},{
    name: 'Open Sans',
    family: 'Open Sans',
    google: 'Open+Sans:300,400,500,700,400italic'
},{
    name: 'Lato',
    family: 'Lato',
    google: 'Lato:300,400,500,700,400italic'
},{
    name: 'Ubuntu',
    family: 'Ubuntu',
    google: 'Ubuntu:300,400,500,700,400italic'
},{
    name: 'Source Sans Pro',
    family: 'Source Sans Pro',
    google: 'Source+Sans+Pro:300,400,500,700,400italic'
}])
.config(function ($translatePartialLoaderProvider, $stateProvider) {
    $translatePartialLoaderProvider.addPart('app/ui');

    $stateProvider
    .state('admin.toolbar.default.typography', {
        url: '/ui/typography',
        controller: 'TypographyController',
        templateUrl: 'app/ui/typography.tmpl.html',
    })
    .state('admin.toolbar.default.colors', {
        url: '/ui/colors',
        controller: 'ColorsController',
        templateUrl: 'app/ui/colors.tmpl.html',
    })
    .state('admin.toolbar.default.material-icons', {
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
    .state('admin.toolbar.default.fa-icons', {
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
    .state('admin.toolbar.default.themes', {
        url: '/ui/themes',
        controller: 'ThemesController',
        templateUrl: 'app/ui/themes.tmpl.html',
    });
})
.run(function(SideMenu, TypographySwitcher) {
    // load up the webfont loader to allow loading google fonts in the demo
    jQuery.ajax({
        url: '//ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js',
        dataType: 'script',
        async: true,
        success: function() {
            // initialise typography switcher (make sure correct font is loaded if one has been selected)
            TypographySwitcher.init();
        }
    });

    // setup ui
    SideMenu.addMenu({
        name: 'MENU.UI.UI',
        icon: 'icon-straighten',
        type: 'dropdown',
        priority: 3.2,
        children: [{
            name: 'MENU.UI.COLORS',
            url: '/ui/colors',
            type: 'link',
        },{
            name: 'MENU.UI.FONT_AWESOME',
            url: '/ui/fa-icons',
            type: 'link',
        },{
            name: 'MENU.UI.MATERIAL_ICONS',
            url: '/ui/material-icons',
            type: 'link',
        },{
            name: 'MENU.UI.THEMES',
            url: '/ui/themes',
            type: 'link',
        },{
            name: 'MENU.UI.TYPOGRAPHY',
            url: '/ui/typography',
            type: 'link',
        }]
    });
});
