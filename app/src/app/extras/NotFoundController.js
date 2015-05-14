'use strict';

/**
 * @ngdoc function
 * @name NotFoundController
 * @module triAngularExtras
 * @kind function
 *
 * @description
 *
 * Handles login form submission and response
 */
angular.module('triAngularExtras')
.controller('NotFoundController', function ($scope, $state, APP, $window) {
    $scope.appName = APP.name;
    
    $scope.goHome = function() {
        $state.go('admin-panel.default.dashboard-general');        
    };
});