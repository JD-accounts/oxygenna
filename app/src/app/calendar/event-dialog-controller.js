'use strict';

/**
 * @ngdoc function
 * @name EventDialogController
 * @module triAngularCalendar
 * @kind function
 *
 * @description
 *
 * Handles actions in event dialog
 */

angular.module('triAngularCalendar')
.controller('EventDialogController', function ($scope, $mdDialog, $filter, triTheming, dialogData, event) {
    $scope.dialogData = dialogData;
    $scope.event = event;
    $scope.colors = [];
    $scope.selectedColor = null;

    $scope.colorChanged = function() {
        $scope.event.backgroundColor = $scope.selectedColor.backgroundColor;
        $scope.event.borderColor = $scope.selectedColor.backgroundColor;
        $scope.event.textColor = $scope.selectedColor.textColor;
        $scope.event.palette = $scope.selectedColor.palette;
    };

    // create colors
    angular.forEach(triTheming.palettes, function(palette, index) {
        var color = {
            name: $filter('capitalize')(index.replace(/-/g, ' ')),
            palette: index,
            backgroundColor: triTheming.rgba(palette['500'].value),
            textColor: triTheming.rgba(palette['500'].contrast)
        };

        $scope.colors.push(color);

        if(index === event.palette) {
            $scope.selectedColor = color;
            $scope.colorChanged();
        }
    });


    $scope.ok = function() {
        $mdDialog.hide($scope.event);
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };
});