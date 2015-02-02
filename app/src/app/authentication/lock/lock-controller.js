'use strict';

/**
 * @ngdoc function
 * @name LoginCtrl
 * @module triangular.authentication
 * @kind function
 *
 * @description
 * Invokes the `iterator` function once for each item in `obj` collection, which can be either an
 * object or an array. The `iterator` function is invoked with `iterator(value, key, obj)`, where `value`
 * is the value of an object property or an array element, `key` is the object property key or
 * array element index and obj is the `obj` itself. Specifying a `context` for the function is optional.
 *
 * It is worth noting that `.forEach` does not iterate over inherited properties because it filters
 * using the `hasOwnProperty` method.
 *
 * Unlike ES262's
 * [Array.prototype.forEach](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.18),
 * Providing 'undefined' or 'null' values for `obj` will not throw a TypeError, but rather just
 * return the value provided.
 *
 */
angular.module('triAngularAuthentication')
.controller('LockController', function ($scope, $state, $timeout, AuthService) {
    $scope.user = AuthService.getUser();
    $scope.loginUser = {
        email: $scope.user.email,
        password: ''
    };
    // create array for alerts from form
    $scope.alerts = [];

    // controller to handle login check
    $scope.loginClick = function() {
        AuthService.login($scope.loginUser, function(user) {
            // user logged in ok so goto the dashboard
            $state.go('private.admin.dashboard');
        }, function(error) {
            // username & password wrong so pop an error
            $scope.loginUser.password = '';
            $scope.showAlert({
                title: 'Access Denied',
                body: 'Invalid username and password - the password is demo if you forgot',
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
});