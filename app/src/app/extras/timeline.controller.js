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
        subtitle:'Designer',        
    },{
        title: 'Dorothy Lewis',
        subtitle:'Designer',        
    },{
        title: 'Harris Kwnst',
        subtitle:'Developer',        
    },{
        title: 'Sue Ross',
        subtitle:'Marketing',        
    },{
        title: 'Joe Ross',
        subtitle:'Finance',        
    },{
        title: 'Shirley King',
        subtitle:'Designer',        
    },{
        title: 'John King',
        subtitle:'Developer',        
    },{
        title: 'Mary Rose',
        subtitle:'Advertising',        
    },{
        title: 'Morris Onions',
        subtitle:'Finance',        
    }];
});