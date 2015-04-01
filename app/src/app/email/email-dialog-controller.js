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
.controller('EmailDialogController', function ($scope, $mdDialog, $filter, title, email) {
    $scope.title = title;
    $scope.email = angular.copy(email);

    // add r.e to subject if there is one
    if($scope.email.subject !== '') {
        $scope.email.subject = $filter('translate')('EMAIL.RE') + $scope.email.subject;
    }

    // wrap previous content in blockquote and add new line
    if($scope.email.content !== '') {
        $scope.email.content = '<br><br><blockquote>' + $scope.email.content + '</blockquote>';
    }

    $scope.send = function() {
        $mdDialog.hide($scope.email);
    }

    $scope.cancel = function() {
        $mdDialog.cancel();
    }
});