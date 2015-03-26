'use strict';

/**
 * @ngdoc function
 * @name ThemesController
 * @module triAngularUI
 * @kind function
 *
 * @description
 *
 * Handles the themes ui page
 */
angular.module('triAngularUI').
controller('ThemesController', function ($scope, $rootScope, triThemeColors) {
    $scope.selectedMainTheme = $rootScope.currentTheme;

    $scope.themes = triThemeColors.themes();

    $scope.updateThemes = function() {
        $rootScope.currentTheme = $scope.selectedMainTheme;
    }
});