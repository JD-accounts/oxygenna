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
controller('FaIconsController', function ($scope, icons) {
    $scope.icons = loadIcons();

    function loadIcons() {
        var allIcons = [];
        for(var className in icons.data) {
            allIcons.push({
                className: className,
                name: icons.data[className]
            });
        }
        return allIcons;
    }

    $scope.iconSource = 'Select icon below to see HTML';

    $scope.selectIcon = function(icon) {
        $scope.iconSource = '<md-icon md-font-icon="' + icon.className + '"></md-icon>';
    };
});