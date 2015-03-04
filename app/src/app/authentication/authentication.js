'use strict';

/**
 * @ngdoc module
 * @name triangular.authentication
 * @description
 *
 * The `triangular.authentication` module handles all the login and signup pages
 */
angular.module('triAngularAuthentication', ['ui.gravatar'])
.constant('ACCESS', {
    'public':  0x01,
    'private': 0x02,
})
.config(function ($translatePartialLoaderProvider, $stateProvider) {
    $translatePartialLoaderProvider.addPart('app/authentication');

    $stateProvider
    .state('public.auth', {
        abstract: true,
        templateUrl: 'app/authentication/layouts/auth.html',
    })
    .state('public.auth.login', {
        url: '/login',
        templateUrl: 'app/authentication/login/login.html',
        controller: 'LoginController'
    })
    .state('public.auth.signup', {
        url: '/signup',
        templateUrl: 'app/authentication/signup/signup.html',
        controller: 'SignupController'
    })
    .state('public.auth.user-lock', {
        url: '/lock',
        templateUrl: 'app/authentication/lock/lock.html',
        controller: 'LockController'
    })
    .state('public.auth.forgot', {
        url: '/forgot',
        templateUrl: 'app/authentication/forgot/forgot.html',
        controller: 'ForgotController'
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'Extras',
        icon: 'icon-add-box',
        type: 'dropdown',
        priority: 2,
        children: [{
            name: 'Login',
            icon: 'icon-person',
            url: '/login',
            type: 'link',
        },{
            name: 'Sign Up',
            icon: 'icon-person-add',
            url: '/signup',
            type: 'link',
        },{
            name: 'Forgot Password',
            icon: 'icon-live-help',
            url: '/forgot',
            type: 'link',
        },{
            name: 'Lock Page',
            icon: 'icon-lock',
            url: '/lock',
            type: 'link',
        }]
    });
});

