'use strict';

/**
 * @ngdoc function
 * @name IntroductionController
 * @module triAngularEmail
 * @kind function
 *
 *
 */
angular.module('triAngularEmail')
.controller('IntroductionController', function ($scope, SideMenu) {
    $scope.menu = SideMenu.getMenu();
});