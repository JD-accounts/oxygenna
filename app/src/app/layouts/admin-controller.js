'use strict';

/**
 * @ngdoc function
 * @name AdminController
 * @module triAngular
 * @kind function
 *
 * @description
 *
 * Handles the admin view
 */
angular.module('triAngular').
controller('AdminController', function ($scope, $timeout, $mdSidenav) {
    $scope.openMenu = function() {
        $timeout(function() { $mdSidenav('left').open(); });
    }
});