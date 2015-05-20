'use strict';

/**
 * @ngdoc function
 * @name WidgetLoadDataDialogController
 * @module triAngularDashboards
 * @kind function
 *
 * @description
 *
 * Handles actions in compose dialog
 */

angular.module('triAngularDashboards')
.controller('WidgetLoadDataDialogController', function ($scope, $mdDialog, triTheme, data) {
    $scope.data = data;
    $scope.triTheme = triTheme;

    $scope.closeDialog = function() {
        $mdDialog.cancel();
    };
});