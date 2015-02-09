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
.controller('LockController', function ($scope, $state, $timeout ) {
    // $scope.user = AuthService.getUser();
    // $scope.loginUser = {
    //     email: $scope.user.email,
    //     password: ''
    // };
    // // create array for alerts from form
    // $scope.alerts = [];

    // // controller to handle login check
    // $scope.loginClick = function() {
    //     AuthService.login($scope.loginUser, function(user) {
    //         // user logged in ok so goto the dashboard
    //         $state.go('private.admin.dashboard');
    //     }, function(error) {
    //         // username & password wrong so pop an error
    //         $scope.loginUser.password = '';
    //         $scope.showAlert({
    //             title: 'Access Denied',
    //             body: 'Invalid username and password - the password is demo if you forgot',
    //             type: 'alert-danger'
    //         });
    //     });
    // };

    // $scope.showAlert = function(alert) {
    //     $scope.alerts = [];
    //     $scope.alerts.push(alert);
    //     $timeout(function() {
    //         $scope.$apply(function() {
    //             $scope.alerts = [];
    //         });
    //     }, 4000);
    // };
});