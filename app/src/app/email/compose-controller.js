'use strict';

/**
 * @ngdoc function
 * @name ComposeController
 * @module triAngularEmail
 * @kind function
 *
 * @description
 *
 * Handles actions in compose dialog
 */

angular.module('triAngularEmail')
.controller('ComposeController', function ($scope, $mdDialog) {
    $scope.email = {
        to: '',
        subject: '',
        content: ''
    };

    $scope.send = function() {
        $mdDialog.hide($scope.email);
    }

    $scope.cancel = function() {
        $mdDialog.cancel();
    }
});