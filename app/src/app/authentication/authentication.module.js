'use strict';

/**
 * @ngdoc module
 * @name triangular.authentication
 * @description
 *
 * The `triangular.authentication` module handles all the login and signup pages
 */
angular.module('triAngularAuthentication', ['ui.gravatar'])
.config(function ($translatePartialLoaderProvider, $stateProvider) {
    $translatePartialLoaderProvider.addPart('app/authentication');

    $stateProvider
    .state('authentication', {
        abstract: true,
        templateUrl: 'app/authentication/layouts/authentication.tmpl.html',
    })
    .state('authentication.login', {
        url: '/login',
        templateUrl: 'app/authentication/login/login.tmpl.html',
        controller: 'LoginController'
    })
    .state('authentication.signup', {
        url: '/signup',
        templateUrl: 'app/authentication/signup/signup.tmpl.html',
        controller: 'SignupController'
    })
    .state('authentication.user-lock', {
        url: '/lock',
        templateUrl: 'app/authentication/lock/lock.tmpl.html',
        controller: 'LockController'
    })
    .state('authentication.forgot', {
        url: '/forgot',
        templateUrl: 'app/authentication/forgot/forgot.tmpl.html',
        controller: 'ForgotController'
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'MENU.AUTH.AUTH',
        icon: 'icon-person',
        type: 'dropdown',
        priority: 4.1,
        children: [{
            name: 'MENU.AUTH.LOGIN',
            url: '/login',
            type: 'link',
        },{
            name: 'MENU.AUTH.SIGN_UP',
            url: '/signup',
            type: 'link',
        },{
            name: 'MENU.AUTH.FORGOT',
            url: '/forgot',
            type: 'link',
        },{
            name: 'MENU.AUTH.LOCK',
            url: '/lock',
            type: 'link',
        }]
    });
});

