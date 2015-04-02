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
    .state('private.admin.toolbar.default.typography', {
        url: '/ui/typography',
        controller: 'TypographyController',
        templateUrl: 'app/ui/typography.tmpl.html',
    })
    .state('private.admin.toolbar.default.colors', {
        url: '/ui/colors',
        controller: 'ColorsController',
        templateUrl: 'app/ui/colors.tmpl.html',
    })
    .state('private.admin.toolbar.default.themes', {
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
        name: 'UI',
        icon: 'icon-straighten',
        type: 'dropdown',
        priority: 3.2,
        children: [{
            name: 'Colors',
            url: '/ui/colors',
            type: 'link',
        },{
            name: 'Typography',
            url: '/ui/typography',
            type: 'link',
        },{
            name: 'Themes',
            url: '/ui/themes',
            type: 'link',
        }]
    });
});
