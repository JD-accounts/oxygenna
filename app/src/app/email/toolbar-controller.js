'use strict';

/**
 * @ngdoc function
 * @name EmailToolbarController
 * @module triAngularEmail
 * @kind function
 *
 * @description
 *
 * Handles all actions for email toolbar
 */

angular.module('triAngularEmail')
.controller('EmailToolbarController', function ($scope, $filter, SideMenu, EMAIL_ROUTES) {
    $scope.showSearch = false;
    $scope.toolbarMenu = [];
    $scope.currentMenu = SideMenu.currentMenu();
    for(var i = 0; i < EMAIL_ROUTES.length; i++) {
        $scope.toolbarMenu.push({
            name: $filter('translate')('EMAIL.ROUTES.' + EMAIL_ROUTES[i].name),
            url: EMAIL_ROUTES[i].url,
            icon: EMAIL_ROUTES[i].icon,
        });
    }

    $scope.toggleSearch = function() {
        $scope.showSearch = !$scope.showSearch;
    };
});