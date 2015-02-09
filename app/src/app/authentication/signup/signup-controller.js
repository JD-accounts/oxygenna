'use strict';

/**
 * @ngdoc function
 * @name SignupController
 * @module triAngularAuthentication
 * @kind function
 *
 * @description
 *
 * Handles sending of signup info to api and response
 */
angular.module('triAngularAuthentication')
.controller('SignupController', function ($scope, $http, $filter) {
    // create blank user variable for login form
    $scope.user = {
        email: '',
        password: '',
        confirm: ''
    };

    // create array for alerts from form
    $scope.alerts = [];

    // controller to handle login check
    $scope.signupClick = function() {
        $scope.showAlert({
            title: 'Signup Sent',
            body: 'Thanks for signing up with us.',
            type: 'alert-success'
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
});