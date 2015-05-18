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
controller('AdminController', function ($scope, $element, $timeout, $mdSidenav, $mdUtil, $state, triTheme, APP) {
    $scope.triTheme = triTheme;
    $scope.toolbarShrink = false;

    $scope.$on('$stateChangeSuccess', function() {
        $scope.toolbarShrink = false;
        // set content padding class
        if($state.current.data !== undefined) {
            if($state.current.data.toolbar !== undefined) {
                if($state.current.data.toolbar.shrink === true) {
                    $scope.toolbarShrink = true;
                }
            }
        }
    });
});