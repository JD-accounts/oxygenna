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
        image: 'assets/images/avatars/hair-black-eyes-blue-green-skin-tanned.png',
        content: '<img src="assets/images/backgrounds/bg-1.jpg"/>'
    },{
        title: 'Dorothy Lewis',
        date:'27/6/2015',
        image: 'assets/images/avatars/hair-black-eyes-brown-skin-tanned.png',
        content: '<img src="assets/images/backgrounds/bg-1.jpg"/>'
    },{
        title: 'Harris Kwnst',
        date:'26/6/2015',        
        image: 'assets/images/avatars/hair-blonde-eyes-brown-skin-light.png',
        content: '<img src="assets/images/backgrounds/bg-1.jpg"/>'
    },{
        title: 'Sue Ross',
        date:'24/6/2015',        
        image: 'assets/images/avatars/hair-black-eyes-dark-skin-dark.png',
        content: '<img src="assets/images/backgrounds/bg-1.jpg"/>'
    },{
        title: 'Joe Ross',
        date:'23/6/2015',        
        image: 'assets/images/avatars/hair-blonde-eyes-blue-green-skin-light.png',
        content: '<img src="assets/images/backgrounds/bg-1.jpg"/>'
    },{
        title: 'Shirley King',
        date:'19/6/2015',        
        image: 'assets/images/avatars/hair-blonde-eyes-brown-skin-tanned.png',
        content: '<img src="assets/images/backgrounds/bg-1.jpg"/>'
    },{
        title: 'John King',
        date:'17/6/2015',        
        image: 'assets/images/avatars/hair-black-eyes-brown-skin-dark.png',
        content: '<img src="assets/images/backgrounds/bg-1.jpg"/>'
    },{
        title: 'Mary Rose',
        date:'16/6/2015',        
        image: 'assets/images/avatars/hair-grey-eyes-dark-skin-tanned.png',
        content: '<img src="assets/images/backgrounds/bg-1.jpg"/>'
    },{
        title: 'Morris Onions',
        date:'12/6/2015',        
        image: 'assets/images/avatars/hair-black-eyes-brown-skin-tanned-2.png',
        content: '<img src="assets/images/backgrounds/bg-1.jpg"/>'
    }];

});