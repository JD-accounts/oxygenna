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
        url: '/',
        templateUrl: 'app/authentication/login/login.html',
        controller: 'LoginController'
    })
    .state('public.auth.signup', {
        url: '/signup',
        templateUrl: 'app/authentication/signup/signup.html',
        controller: 'SignupController'
    })
    .state('private.blank.user-lock', {
        url: '/lock',
        templateUrl: 'app/authentication/lock/lock.html',
        controller: 'LockController'
    });
});
