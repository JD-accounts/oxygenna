'use strict';

/**
 * @ngdoc function
 * @name AdminNotificationsController
 * @module triAngular
 * @kind function
 *
 * @description
 *
 * Handles the admin view
 */
angular.module('triAngular').
controller('AdminNotificationsController', function ($scope) {
    $scope.notificationsTab = 0;

    $scope.$on('triSwitchNotificationTab', function($event, tab) {
        $scope.notificationsTab = tab;
    });
});