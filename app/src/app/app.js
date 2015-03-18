'use strict';

angular.module('triAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ui.router', 'ngMaterial', 'pascalprecht.translate', 'LocalStorageModule', 'googlechart', 'triAngularIntroduction', 'triAngularUI', 'triAngularAuthentication', 'triAngularDashboards', 'triAngularEmail', 'triAngularMenuLevels'])
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
        template: '<div ui-view="toolbar"></div><md-content ui-view="content" md-scroll-y layout flex></md-content>',
    })

    .state('private.admin.toolbar.default', {
        abstract: true,
        views: {
            toolbar: {
                templateUrl: 'components/toolbars/default.tmpl.html',
                controller: 'DefaultToolbarController'
            },
            content: {
                template: '<ui-view/>',
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
    $mdThemingProvider.alwaysWatchTheme(true);

    $mdThemingProvider.theme('tri-grass')
    .primaryPalette('green')
    .accentPalette('light-green')
    .warnPalette('deep-orange')

    $mdThemingProvider.theme('tri-purple')
    .primaryPalette('purple')
    .accentPalette('deep-purple')
    .warnPalette('amber')
})
.run(['$rootScope', '$state', 'AuthService', function ($rootScope, $state, AuthService) {
    $rootScope.availableThemes = [{
        name: 'Default',
        theme: 'default'
    },{
        name: 'Grass',
        theme: 'tri-grass'
    },{
        name: 'Purple',
        theme: 'tri-purple'
    }]
    $rootScope.currentTheme = $rootScope.availableThemes[0].theme;
    $rootScope.sidebarTheme = $rootScope.availableThemes[1].theme;
    // $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
    //     if(!('data' in toState) || !('access' in toState.data)) {
    //         event.preventDefault();
    //         $state.go('public.access-undefined', {
    //             toState: toState.name
    //         });
    //     }
    //     else if (!AuthService.authorise(toState.data.access)) {
    //         event.preventDefault();
    //         if(fromState.url === '^') {
    //             if(AuthService.isLoggedIn()) {
    //                 $state.go('private.admin.dashboard');
    //             } else {
    //                 $state.go('public.login');
    //             }
    //         }
    //     }
    // });
}]);