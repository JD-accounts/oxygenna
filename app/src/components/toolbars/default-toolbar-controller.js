'use strict';

/**
 * @ngdoc function
 * @name EmailToolbarController
 * @module triAngularEmail
 * @kind function
 *
 * @description
 *
 * Handles all actions for email toolbar
 */

angular.module('triAngular')
.controller('DefaultToolbarController', function ($scope, $translate, $state, SideMenu, triTheme, APP) {
    $scope.appName = APP.name;
    $scope.menu = SideMenu.getMenu();
    $scope.triTheme = triTheme;

    $scope.switchLanguage = function(languageCode) {
        $translate.use(languageCode).then(function(data) {
        })
    };
});