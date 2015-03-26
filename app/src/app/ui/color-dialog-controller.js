'use strict';

/**
 * @ngdoc function
 * @name ColorDialogController
 * @module triAngularUI
 * @kind function
 *
 * @description
 *
 * Handles the colors popup dialog
 */
angular.module('triAngularUI').
controller('ColorDialogController', function ($scope, name, palette, colourRGBA) {
    $scope.name = name;
    $scope.palette = [];
    $scope.colourRGBA = colourRGBA;

    for(var c in palette) {
        $scope.palette.push({
            name: c,
            value: palette[c].value
        });
    }

    console.log($scope.palette);
});