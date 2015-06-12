'use strict';

/**
 * @ngdoc function
 * @name ChipsController
 * @module triAngularElements
 * @kind function
 *
 * @description
 *
 * Handles buttons element page
 */
angular.module('triAngularElements').
controller('Fab1Controller', function ($scope) {
    $scope.fabDirections = ['up', 'down', 'left', 'right'];
    $scope.fabDirection = $scope.fabDirections[0];

    $scope.fabAnimations = ['md-fling', 'md-scale'];
    $scope.fabAnimation = $scope.fabAnimations[0];

    $scope.fabStatuses = [false, true];
    $scope.fabStatus = $scope.fabStatuses[0];

});