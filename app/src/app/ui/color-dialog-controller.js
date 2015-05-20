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
controller('ColorDialogController', function ($scope, name, palette, triTheme) {
    $scope.name = name;
    $scope.palette = [];
    $scope.triTheme = triTheme;

    $scope.itemStyle = function(palette) {
        return {
            'background-color': triTheme.rgba(palette.value),
            'color': triTheme.rgba(palette.contrast)
        };
    };

    for(var code in palette) {
        $scope.palette.push({
            code: code,
            palette: palette[code]
        });
    }
});