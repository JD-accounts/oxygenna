'use strict';

/**
 * @ngdoc function
 * @name LoginCtrl
 * @module triangular.authentication
 * @kind function
 *
 * @description
 *
 * Handles lock screen login
 *
 */
angular.module('triAngularAuthentication')
.controller('LockController', function ($scope, $state, $mdToast, $filter, AuthService) {
    $scope.user = {
        name: 'Morris Onions',
        email: 'info@oxygenna.com',
        password: 'demo'
    };

    // controller to handle login check
    $scope.loginClick = function() {
        AuthService.login($scope.user, function() {
            // user logged in ok so goto the dashboard
            $state.go('private.admin.dashboard1');
        }, function() {
            $mdToast.show(
                $mdToast.simple()
                .content($filter('translate')('LOCK.MESSAGES.ACCESS_DENIED'))
                .position('bottom right')
                .hideDelay(5000)
            );
        });
    };


    $scope.logoutClick = function() {
        // terminate session here

        // go back to login screen
        $state.go('public.auth.login');
    };
});