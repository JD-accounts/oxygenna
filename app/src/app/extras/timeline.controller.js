'use strict';

/**
 * @ngdoc function
 * @name AvatarsController
 * @module triAngularExtras
 * @kind function
 *
 *
 */
angular.module('triAngularExtras').
controller('TimelineController', function ($scope) {
    $scope.events = [{
        title: 'Carl Barnes',
        date:'27/6/2015',        
    },{
        title: 'Dorothy Lewis',
        date:'27/6/2015',        
    },{
        title: 'Harris Kwnst',
        date:'26/6/2015',        
    },{
        title: 'Sue Ross',
        date:'24/6/2015',        
    },{
        title: 'Joe Ross',
        date:'23/6/2015',        
    },{
        title: 'Shirley King',
        date:'19/6/2015',        
    },{
        title: 'John King',
        date:'17/6/2015',        
    },{
        title: 'Mary Rose',
        date:'16/6/2015',        
    },{
        title: 'Morris Onions',
        date:'12/6/2015',        
    }];
});