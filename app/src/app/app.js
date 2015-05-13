'use strict';

angular.module('triAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ui.router', 'ngMaterial', 'pascalprecht.translate', 'LocalStorageModule', 'googlechart', 'chart.js', 'linkify', 'ui.calendar', 'triAngularIntroduction', 'triAngularUI', 'triAngularAuthentication', 'triAngularDashboards', 'triAngularEmail', 'triAngularMenuLevels', 'triAngularElements', 'triAngularForms', 'triAngularCharts', 'triAngularMaps'])
.constant('APP', {
    name: 'Triangular'
})
.constant('API_CONFIG', {
    'url':  'http://triangular-api.oxygenna.com/'
})
.config(function ($stateProvider, $urlRouterProvider, $translateProvider, $translatePartialLoaderProvider, localStorageServiceProvider, ACCESS) {
    // $stateProvider
    // .state('home', {
    //     url: '/',
    //     templateUrl: 'app/main/main.html',
    //     controller: 'MainCtrl'
    // });

    // $urlRouterProvider.otherwise('/');

    // SETUP TRANSLATIONS

    // each module loads its own translation file - making it easier to create translations
    // also translations are not loaded when they aren't needed
    // each module will have a il8n folder that will contain its translations
    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '{part}/il8n/{lang}.json'
    });

    $translatePartialLoaderProvider.addPart('app');

    // cache translation files to save load on server
    $translateProvider.useLoaderCache(true);

    // try to detect the users language by checking the following
    // navigator.language
    // navigator.browserLanguage
    // navigator.systemLanguage
    // navigator.userLanguage
    $translateProvider
    .registerAvailableLanguageKeys(['en', 'el'], {
        'en_US': 'en',
        'en_UK': 'en',
        'el_GR': 'el',
    })
    .determinePreferredLanguage();

    // store the users language preference in a cookie
    $translateProvider.useLocalStorage();

    // setup public states & routes
    $stateProvider
    .state('public', {
        abstract: true,
        template: '<ui-view/>',
        data: {
            access: ACCESS.public
        }
    })

    .state('private', {
        abstract: true,
        template: '<ui-view/>',
        data: {
            access: ACCESS.private
        }
    })

    .state('private.admin', {
        abstract: true,
        templateUrl: 'app/layouts/admin.tmpl.html',
    })

    .state('private.admin.toolbar', {
        abstract: true,
        template: '<tri-loader></tri-loader><div id="ui-admin-toolbar" ui-view="toolbar"></div><div id="ui-admin-content" flex layout ui-view="content"></div>',
    })

    .state('private.admin.toolbar.default', {
        abstract: true,
        views: {
            toolbar: {
                templateUrl: 'components/toolbars/default.tmpl.html',
                controller: 'DefaultToolbarController'
            },
            content: {
                template: '<div flex ui-view></div>',
            }
        },
    })

    .state('private.blank', {
        abstract: true,
        template: '<ui-view/>',
    })

    .state('public.access-undefined', {
        url: '/access-undefined/:toState',
        templateUrl: 'app/misc/access-undefined.html',
        controller: function($scope, $stateParams) {
            $scope.state = $stateParams.toState;
        }
    });

    // always goto 404 if route not found
    $urlRouterProvider.otherwise('/introduction');

    // set prefix for local storage
    localStorageServiceProvider
    .setPrefix('triAngular')
    .setStorageType('sessionStorage');
})
.config(function ($mdThemingProvider, triThemeProvider) {
    // demo only, comment out this line for better performance
    $mdThemingProvider.alwaysWatchTheme(true);

    // set the default themes for each of the themeable elements
    triThemeProvider.setThemeableElements({
        mainTheme: 'default',
        logoTheme: 'default',
        toolbarTheme: 'default',
        sidebarTheme: 'default'
    });

    // store the selected theme data in a cookie
    triThemeProvider.useThemeCookie(true);

    $mdThemingProvider.definePalette('white', {
        '50': 'ffffff',
        '100': 'ffffff',
        '200': 'ffffff',
        '300': 'ffffff',
        '400': 'ffffff',
        '500': 'ffffff',
        '600': 'ffffff',
        '700': 'ffffff',
        '800': 'ffffff',
        '900': 'ffffff',
        'A100': 'ffffff',
        'A200': 'ffffff',
        'A400': 'ffffff',
        'A700': 'ffffff',
        'contrastDefaultColor': 'dark',    // whether, by default, text (contrast)
    });

    $mdThemingProvider.definePalette('black', {
        '50': 'e1e1e1',
        '100': 'b6b6b6',
        '200': '8c8c8c',
        '300': '646464',
        '400': '4d4d4d',
        '500': '3a3a3a',
        '600': '2f2f2f',
        '700': '232323',
        '800': '1a1a1a',
        '900': '121212',
        'A100': 'ffffff',
        'A200': 'ffffff',
        'A400': 'ffffff',
        'A700': 'ffffff',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
    });


    // Create some themes for the template
    $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('pink')
    .warnPalette('red');

    $mdThemingProvider.theme('blue')
    .primaryPalette('blue')
    .accentPalette('red')
    .warnPalette('orange');

    $mdThemingProvider.theme('green')
    .primaryPalette('green')
    .accentPalette('deep-orange')
    .warnPalette('red');

    $mdThemingProvider.theme('red')
    .primaryPalette('red')
    .accentPalette('amber')
    .warnPalette('red');

    $mdThemingProvider.theme('blue-grey')
    .primaryPalette('blue-grey')
    .accentPalette('deep-orange')
    .warnPalette('red')
    .backgroundPalette('grey');

    $mdThemingProvider.theme('dark')
    .primaryPalette('black')
    .accentPalette('amber')
    .warnPalette('deep-orange')
    .backgroundPalette('black')
    .dark();

    $mdThemingProvider.theme('white-red')
    .primaryPalette('white')
    .accentPalette('red')
    .warnPalette('orange');

    $mdThemingProvider.theme('white-blue')
    .primaryPalette('white')
    .accentPalette('blue')
    .warnPalette('deep-orange');

    $mdThemingProvider.theme('white-green')
    .primaryPalette('white')
    .accentPalette('green')
    .warnPalette('deep-orange');

})
.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts to use material design colors
    ChartJsProvider.setOptions({
        colours: [
            '#4285F4',    // blue
            '#DB4437',     // red
            '#F4B400',     // yellow
            '#0F9D58',     // green
            '#AB47BC',    // purple
            '#00ACC1',     // light blue
            '#FF7043',    // orange
            '#9E9D24',    // browny yellow
            '#5C6BC0'     // dark blue
        ],
        responsive: true,
    });
}])
// setup google charts to use material charts
.value('googleChartApiConfig', {
    version: '1.1',
    optionalSettings: {
        packages: ['line', 'bar', 'geochart', 'scatter'],
        language: 'en'
    }
});