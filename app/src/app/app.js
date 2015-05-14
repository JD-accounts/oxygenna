'use strict';

angular.module('triAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ui.router', 'ngMaterial', 'pascalprecht.translate', 'LocalStorageModule', 'googlechart', 'chart.js', 'linkify', 'ui.calendar', 'triAngularIntroduction', 'triAngularUI', 'triAngularAuthentication', 'triAngularDashboards', 'triAngularEmail', 'triAngularMenuLevels', 'triAngularElements', 'triAngularForms', 'triAngularCharts', 'triAngularMaps', 'triAngularExtras'])
.constant('APP', {
    name: 'Triangular'
})
.constant('API_CONFIG', {
    'url':  'http://triangular-api.oxygenna.com/'
})
.config(function ($stateProvider, $urlRouterProvider, $translateProvider, $translatePartialLoaderProvider, localStorageServiceProvider) {
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

    .state('admin-panel', {
        abstract: true,
        templateUrl: 'app/layouts/admin-panel/admin-panel.tmpl.html',
        data: {
            toolbar: {
                tall: false,
                background: false,
                shrink: true
            },
        }
    })

    .state('admin-panel.default', {
        abstract: true,
        views: {
            sidebarLeft: {
                templateUrl: 'components/sidebar-left/sidebar-left.tmpl.html'
            },
            toolbar: {
                templateUrl: 'components/toolbars/default.tmpl.html',
                controller: 'DefaultToolbarController'
            },
            footer: {
                templateUrl: 'components/footer/footer.tmpl.html',
            },
            content: {
                template: '<div flex ui-view></div>'
            }
        },
    })

    .state('admin-panel.default.padded', {
        abstract: true,
        template: '<div flex ui-view></div>',
        data: {
            content: {
                paddingClass: 'padded-content-page'
            }
        }
    })

    .state('access-undefined', {
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
    .accentPalette('amber')
    .warnPalette('deep-orange');

    $mdThemingProvider.theme('red')
    .primaryPalette('red')
    .accentPalette('amber')
    .warnPalette('purple');

    $mdThemingProvider.theme('pink')
    .primaryPalette('pink')
    .accentPalette('deep-purple')
    .warnPalette('amber');

    $mdThemingProvider.theme('purple')
    .primaryPalette('purple')
    .accentPalette('deep-orange')
    .warnPalette('amber');

    $mdThemingProvider.theme('cyan')
    .primaryPalette('cyan')
    .accentPalette('amber')
    .warnPalette('deep-orange');

    $mdThemingProvider.theme('teal')
    .primaryPalette('teal')
    .accentPalette('red')
    .warnPalette('orange');

    $mdThemingProvider.theme('deep-orange')
    .primaryPalette('deep-orange')
    .accentPalette('lime')
    .warnPalette('amber')

    $mdThemingProvider.theme('blue-grey')
    .primaryPalette('blue-grey')
    .accentPalette('red')
    .warnPalette('orange')
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

    $mdThemingProvider.theme('white-cyan')
    .primaryPalette('white')
    .accentPalette('cyan')
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