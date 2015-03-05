'use strict';

/**
 * @ngdoc function
 * @name SkinsController
 * @module triAngular
 * @kind function
 *
 * @description
 *
 * Handles the skins ui page
 */
angular.module('triAngularUI').
controller('SkinsController', function ($scope, $rootScope) {
    $scope.selectedMainTheme = $rootScope.currentTheme;
    $scope.selectedSidebarTheme = $rootScope.sidebarTheme;

    $scope.updateThemes = function() {
        $rootScope.currentTheme = $scope.selectedMainTheme;
        $rootScope.sidebarTheme = $scope.selectedSidebarTheme;
    }
});