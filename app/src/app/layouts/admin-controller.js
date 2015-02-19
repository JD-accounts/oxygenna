'use strict';

/**
 * @ngdoc function
 * @name AdminController
 * @module triAngular
 * @kind function
 *
 * @description
 *
 * Handles the admin view
 */
angular.module('triAngular').
controller('AdminController', function ($scope, $timeout, $mdSidenav) {
    $scope.sideMenu = [{
        name: 'Home',
        icon: 'icon-home',
        type: 'link'
    },{
        name: 'Dashboard',
        icon: 'icon-stars',
        type: 'link'
    },{
        name: 'Elements',
        icon: 'icon-visibility',
        type: 'link'
    },{
        name: 'Components',
        icon: 'icon-subtitles',
        type: 'link'
    }];

    $scope.openMenu = function() {
        $timeout(function() { $mdSidenav('left').open(); });
    }
});