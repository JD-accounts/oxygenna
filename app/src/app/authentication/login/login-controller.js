'use strict';

/**
 * @ngdoc function
 * @name LoginCtrl
 * @module triangular.authentication
 * @kind function
 */
angular.module('triAngularAuthentication')
.controller('LoginController', function ($scope, $http, $state, $mdToast, $filter, AuthService) {
    // create blank user variable for login form
    $scope.user = {
        email: 'info@oxygenna.com',
        password: 'demo1243'
    };

    $scope.socialLogins = [{
        icon: 'fa-twitter',
        color: '#5bc0de',
        url: '#'
    },{
        icon: 'fa-facebook',
        color: '#337ab7',
        url: '#'
    },{
        icon: 'fa-google-plus',
        color: '#e05d6f',
        url: '#'
    },{
        icon: 'fa-linkedin',
        color: '#337ab7',
        url: '#'
    }]

    // controller to handle login check
    $scope.loginClick = function() {
        AuthService.login($scope.user, function(user) {
            // user logged in ok so goto the dashboard
            $state.go('private.admin.dashboard1');
        }, function(error) {
            $mdToast.show(
                $mdToast.simple()
                .content($filter('translate')('LOGIN.MESSAGES.ACCESS_DENIED'))
                .position('bottom right')
                .hideDelay(5000)
            );
        });
    };
});