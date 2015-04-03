'use strict';

/**
 * @ngdoc function
 * @name ToastsController
 * @module triAngularElements
 * @kind function
 *
 * @description
 *
 * Handles toasts element page
 */
angular.module('triAngularElements').
controller('ToastsController', function ($scope, $mdToast) {
    $scope.showToast = function($event, position) {
        var $button = angular.element($event.currentTarget);
        $mdToast.show({
            templateUrl: 'app/elements/examples/toast-template.tmpl.html',
            position: position,
            hideDelay: 3000,
            parent: $button.parent()
        });
    };
});