'use strict';

/**
 * @ngdoc function
 * @name IconsController
 * @module triAngularElements
 * @kind function
 *
 * @description
 *
 * Handles icons element page
 */
angular.module('triAngularElements').
controller('IconsController', function ($scope, icons) {
    $scope.icons = [];
    $scope.groups = [];
    // create filterable data structure for icons
    angular.forEach(icons.data, function(iconGroup, groupName) {
        angular.forEach(iconGroup, function(icon, iconName) {
            $scope.icons.push({
                name: iconName,
                group: groupName,
                class: icon
            });
        });
        $scope.groups.push(groupName);
    });
});