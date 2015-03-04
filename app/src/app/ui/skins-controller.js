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
angular.module('triAngularUI').
controller('SkinsController', function ($scope, $rootScope) {
    $scope.selectedTheme = $rootScope.currentTheme;
    $scope.selectSkin = function() {
        $rootScope.currentTheme = $scope.selectedTheme;
    }
});