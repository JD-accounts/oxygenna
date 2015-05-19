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
controller('AvatarsController', function ($scope) {    
    $scope.avatarRows = [[{
        title: 'Carl Barnes',
        subtitle:'Designer',
        image: 'assets/images/avatars/hair-black-eyes-blue-green-skin-tanned.png',
        color: 'blue',
        hue: '500'
    },{
        title: 'Dorothy Lewis',
        subtitle:'Designer',
        image: 'assets/images/avatars/hair-black-eyes-brown-skin-tanned.png',
        color: 'pink',
        hue: '500'
    },{
        title: 'Harris Kwnst',
        subtitle:'Developer',        
        image: 'assets/images/avatars/hair-blonde-eyes-brown-skin-light.png',
        color: 'blue',
        hue: '200'
    },{
        title: 'Sue Ross',
        subtitle:'Marketing',
        image: 'assets/images/avatars/hair-black-eyes-dark-skin-dark.png',
        color: 'green',
        hue: '500'
    }],[{
        title: 'Joe Ross',
        subtitle:'Finance',
        image: 'assets/images/avatars/hair-blonde-eyes-blue-green-skin-light.png',
        color: 'red',
        hue: '500'
    },{
        title: 'Shirley King',
        subtitle:'Designer',
        image: 'assets/images/avatars/hair-blonde-eyes-brown-skin-tanned.png',
        color: 'blue',
        hue: '200'
    },{
        title: 'John King',
        subtitle:'Developer',
        image: 'assets/images/avatars/hair-black-eyes-brown-skin-dark.png',
        color: 'yellow',
        hue: '900'
    },{
        title: 'Mary Rose',
        subtitle:'Advertising',
        image: 'assets/images/avatars/hair-grey-eyes-dark-skin-tanned.png',
        color: 'pink',
        hue: '800'
    }]];
});