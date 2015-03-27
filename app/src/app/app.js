'use strict';

angular.module('triAngular', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ui.router', 'ngMaterial', 'pascalprecht.translate', 'LocalStorageModule', 'googlechart', 'triAngularIntroduction', 'triAngularUI', 'triAngularAuthentication', 'triAngularDashboards', 'triAngularEmail', 'triAngularMenuLevels', 'triAngularElements'])
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
    $translateProvider.determinePreferredLanguage();

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
.config(function ($mdThemingProvider) {
    // demo only, comment out this line for better performance
    $mdThemingProvider.alwaysWatchTheme(true);

    // Extend the red theme with a few different colors
    // var neonRedMap = $mdThemingProvider.extendPalette('red', {
    //     '500': 'ff0000',
    //     'default': 'ff0000'
    // });

    // // Register the new color palette map with the name <code>neonRed</code>
    // $mdThemingProvider.definePalette('neonRed', neonRedMap);

    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('pink')
    .warnPalette('orange')

    $mdThemingProvider.theme('blue')
    .primaryPalette('blue')
    .accentPalette('pink')
    .warnPalette('amber')

    $mdThemingProvider.theme('green')
    .primaryPalette('green')
    .accentPalette('blue')
    .warnPalette('deep-orange')

    $mdThemingProvider.theme('red')
    .primaryPalette('red')
    .accentPalette('amber')
    .warnPalette('yellow')

})
.run(['$rootScope', '$state', 'AuthService', function ($rootScope, $state, AuthService) {
    $rootScope.currentTheme = 'default';
    $rootScope.sidebarTheme = 'default';
    $rootScope.toolbarTheme = 'default';
}]);