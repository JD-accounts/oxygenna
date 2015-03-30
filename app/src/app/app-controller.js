'use strict';

/**
 * @ngdoc function
 * @name AppController
 * @module triAngular
 * @kind function
 *
 * @description
 *
 * Handles the main html theme
 */
angular.module('triAngular').
controller('AppController', function ($scope, triTheme) {
    $scope.triTheme = triTheme;
});