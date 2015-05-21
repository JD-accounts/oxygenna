'use strict';

/**
 * @ngdoc function
 * @name SkinsUIController
 * @module triAngularUI
 * @kind function
 *
 * @description
 *
 * Handles the toolbar ui page
 */
angular.module('triAngularUI').
controller('SkinsUIController', function ($scope, $cookies, $window, triSkins) {
    $scope.skins = triSkins.getSkins();
    $scope.selectedSkin = triSkins.getCurrent();

    $scope.trySkin = function() {
        if($scope.selectedSkin !== triSkins.getCurrent()) {
            $cookies['triangular-skin'] = angular.toJson({
                skin: $scope.selectedSkin.id
            });
            $window.location.reload();
        }
    }
});