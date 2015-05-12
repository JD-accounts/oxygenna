'use strict';

/**
 * @ngdoc function
 * @name DashboardServerController
 * @module triAngularDashboards
 * @kind function
 *
 *
 */
angular.module('triAngularDashboards').
controller('DashboardServerController', function ($scope) {
    $scope.disks = [{
        icon: 'icon-storage',
        name: 'Ubuntu 10.04 LTS Disk Image (10000 MB, ext3)',
        enabled: true
    },{
        icon: 'icon-settings-input-component',
        name: 'Ubuntu 11.10 SSD Image (10224 MB, ext3)',
        enabled: false
    },{
        icon: 'icon-storage',
        name: '256MB Swap Image (256 MB, swap)',
        enabled: true
    }];


    $scope.jobs = [{
        job: 'Host initiated restart',
        time: 'Took: 10 seconds',
        complete: true
    },{
        job: 'Snapshot ',
        time: 'Took: 6minutes 26 seconds',
        complete: false
    }];
});