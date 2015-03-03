'use strict';

/**
 * @ngdoc function
 * @name EmailController
 * @module triAngularEmail
 * @kind function
 *
 */

angular.module('triAngularEmail')
.controller('EmailController', function ($scope, $stateParams, $location, $mdBottomSheet, emails, email) {
    $scope.email = email;

    $scope.reply = function($event) {
        $mdBottomSheet.show({
            templateUrl: 'app/email/reply-bottom-sheet.tmpl.html',
            controller: 'ReplyController',
            parent: angular.element(document.getElementById('email-view')),
            targetEvent: $event,
            locals: {
                email: $scope.email
            }
        });
    };

});