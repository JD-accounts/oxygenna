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
        image: 'assets/images/avatars/hair-black-eyes-blue-green-skin-tanned.png'  
    },{
        title: 'Dorothy Lewis',
        date:'27/6/2015',
        image: 'assets/images/avatars/hair-black-eyes-brown-skin-tanned.png'
    },{
        title: 'Harris Kwnst',
        date:'26/6/2015',        
        image: 'assets/images/avatars/hair-blonde-eyes-brown-skin-light.png'
    },{
        title: 'Sue Ross',
        date:'24/6/2015',        
        image: 'assets/images/avatars/hair-black-eyes-dark-skin-dark.png'
    },{
        title: 'Joe Ross',
        date:'23/6/2015',        
        image: 'assets/images/avatars/hair-blonde-eyes-blue-green-skin-light.png'
    },{
        title: 'Shirley King',
        date:'19/6/2015',        
        image: 'assets/images/avatars/hair-blonde-eyes-brown-skin-tanned.png'
    },{
        title: 'John King',
        date:'17/6/2015',        
        image: 'assets/images/avatars/hair-black-eyes-brown-skin-dark.png'
    },{
        title: 'Mary Rose',
        date:'16/6/2015',        
        image: 'assets/images/avatars/hair-grey-eyes-dark-skin-tanned.png'
    },{
        title: 'Morris Onions',
        date:'12/6/2015',        
        image: 'assets/images/avatars/hair-black-eyes-brown-skin-tanned-2.png'
    }];
});