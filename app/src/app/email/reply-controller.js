'use strict';

/**
 * @ngdoc function
 * @name ReplyController
 * @module triAngularEmail
 * @kind function
 *
 */

angular.module('triAngularEmail')
.controller('ReplyController', function ($scope, $mdBottomSheet, email) {
    $scope.reply = {
        to: email.from,
        subject: email.subject,
        reply: ''
    };

    $scope.send = function() {
        $mdBottomSheet.cancel();
    };

    $scope.close = function() {
        $mdBottomSheet.cancel();
    };
});