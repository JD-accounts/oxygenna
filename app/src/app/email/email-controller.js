'use strict';

/**
 * @ngdoc function
 * @name EmailController
 * @module triAngularEmail
 * @kind function
 *
 */

angular.module('triAngularEmail')
.controller('EmailController', function ($scope, $stateParams, $mdDialog, $mdToast, $filter, emails, email) {
    $scope.email = email;

    $scope.reply = function($event, title) {
        $mdDialog.show({
            controller: 'ComposeController',
            templateUrl: 'app/email/compose.tmpl.html',
            targetEvent: $event,
            locals: {
                title: $filter('translate')(title),
                email: $scope.email
            }
        })
        .then(function(email) {
            $mdToast.show(
                $mdToast.simple()
                .content($filter('translate')('EMAIL.SENT', {to: email.to}))
                .position('bottom right')
                .hideDelay(3000)
            );
        }, function() {
            $mdToast.show(
                $mdToast.simple()
                .content($filter('translate')('EMAIL.CANCELED'))
                .position('bottom right')
                .hideDelay(3000)
            );
        });
    };

});