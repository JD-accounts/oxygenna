'use strict';

/**
 * @ngdoc function
 * @name LoginCtrl
 * @module triangular.authentication
 * @kind function
 */
angular.module('triAngular')
.controller('TestingController', function ($scope, $mdTheming) {
    $scope.testSkin = 'default';
    $scope.intentions = ['md-primary', 'md-accent', 'md-warn'];
    $scope.hues = ['md-hue-1', 'md-hue-2', 'md-hue-3']

    $scope.skins = ['default', 'tri-default', 'tri-purple'];

    $scope.checkbox = true;
    $scope.slider = 3;
    $scope.radio = 'Apple';
    $scope.switch = true;

    $scope.itemClass = function(intent, hue) {
        return intent + ' ' + hue;
    }
});