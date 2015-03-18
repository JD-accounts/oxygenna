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
controller('AdminController', function ($scope, $timeout, $mdSidenav, APP) {
    $scope.appName = APP.name;

    $scope.openMenu = function() {
        $timeout(function() { $mdSidenav('left').open(); });
    }

    // add a watch for when the url location changes
    $scope.$on('$locationChangeSuccess', function() {
        // location has changed so update menu
        $timeout(function() { $mdSidenav('left').close(); });
    });
});