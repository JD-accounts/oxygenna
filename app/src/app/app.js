'use strict';

angular.module('triAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngMessages', 'ui.router', 'ngMaterial', 'pascalprecht.translate', 'LocalStorageModule', 'triAngularAuthentication'])
// register themes
.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('tri-default')
    .primaryPalette('green')
    .accentPalette('pink')
})
.config(function ($stateProvider, $urlRouterProvider, $translateProvider, localStorageServiceProvider, ACCESS) {
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
        templateUrl: 'app/layouts/admin.html',
    })

    .state('private.blank', {
        abstract: true,
        template: '<ui-view/>',
    })

    .state('private.admin.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboards/dashboard.html',
        controller: 'DashboardController'
    })

    .state('public.access-undefined', {
        url: '/access-undefined/:toState',
        templateUrl: 'app/misc/access-undefined.html',
        controller: function($scope, $stateParams) {
            $scope.state = $stateParams.toState;
        }
    });

    // always goto 404 if route not found
    $urlRouterProvider.otherwise('/');

    // set prefix for local storage
    localStorageServiceProvider
    .setPrefix('triAngular')
    .setStorageType('sessionStorage');
});