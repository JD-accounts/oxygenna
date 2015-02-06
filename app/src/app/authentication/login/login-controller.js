'use strict';

/**
 * @ngdoc function
 * @name LoginCtrl
 * @module triangular.authentication
 * @kind function
 */
angular.module('triAngularAuthentication')
.controller('LoginController', function ($scope, $http, $timeout, $state, $translate, AuthService) {
    // create blank user variable for login form
    $scope.user = {
        email: 'info@oxygenna.com',
        password: 'demo'
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

    // create array for alerts from form
    $scope.alerts = [];

    // controller to handle login check
    $scope.loginClick = function() {
        AuthService.login($scope.user, function(user) {
            // user logged in ok so goto the dashboard
            $state.go('private.admin.dashboard1');
        }, function(error) {
            // username & password wrong so pop an error
            $scope.user.password = '';
            $scope.showAlert({
                title: 'Access Denied',
                body: 'Invalid username and password',
                type: 'alert-danger'
            });
        });
    };

    $scope.showAlert = function(alert) {
        $scope.alerts = [];
        $scope.alerts.push(alert);
        $timeout(function() {
            $scope.$apply(function() {
                $scope.alerts = [];
            });
        }, 4000);
    };

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
});