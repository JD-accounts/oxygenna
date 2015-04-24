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
controller('MaterialIconsController', function ($scope, icons) {
    $scope.icons = [];
    $scope.groups = [];

    $scope.iconSource = 'Select icon below to see HTML';
    // create filterable data structure for icons
    angular.forEach(icons.data, function(iconGroup, groupName) {
        angular.forEach(iconGroup, function(icon, iconName) {
            $scope.icons.push({
                name: iconName,
                group: groupName,
                className: icon
            });
        });
        $scope.groups.push(groupName);
    });

    $scope.selectIcon = function(icon) {
        $scope.iconSource = '<md-icon md-font-icon="' + icon.className + '"></md-icon>';
    };

});