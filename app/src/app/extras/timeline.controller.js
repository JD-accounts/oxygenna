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
        subtitle: 'lorem ipsum',
        date:'27/6/2015',
        image: 'assets/images/avatars/hair-black-eyes-blue-green-skin-tanned.png',
        content: '<img src="assets/images/backgrounds/bg-1.jpg"/>',
        palette: "cyan:500"
    },{
        title: 'Dorothy Lewis',
        subtitle: 'lorem ipsum',
        date:'27/6/2015',
        image: 'assets/images/avatars/hair-black-eyes-brown-skin-tanned.png',
        content: '<p class="padding-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
        palette: "cyan:500"
    },{
        title: 'Harris Kwnst',
        subtitle: 'lorem ipsum',
        date:'26/6/2015',
        image: 'assets/images/avatars/hair-blonde-eyes-brown-skin-light.png',
        content: '<img src="assets/images/backgrounds/bg-2.jpg"/>',
        palette: "cyan:500"
    },{
        title: 'Sue Ross',
        subtitle: 'lorem ipsum',
        date:'24/6/2015',
        image: 'assets/images/avatars/hair-black-eyes-dark-skin-dark.png',
        content: '<img src="assets/images/backgrounds/bg-3.jpg"/>',
        palette: "cyan:500"
    },{
        title: 'Joe Ross',
        subtitle: 'lorem ipsum',
        date:'23/6/2015',
        image: 'assets/images/avatars/hair-blonde-eyes-blue-green-skin-light.png',
        content: '<img src="assets/images/backgrounds/bg-4.jpg"/>',
        palette: "cyan:500"
    },{
        title: 'Shirley King',
        subtitle: 'lorem ipsum',
        date:'19/6/2015',
        image: 'assets/images/avatars/hair-blonde-eyes-brown-skin-tanned.png',
        content: '<img src="assets/images/backgrounds/bg-5.jpg"/>',
        palette: "cyan:500"
    },{
        title: 'John King',
        subtitle: 'lorem ipsum',
        date:'17/6/2015',
        image: 'assets/images/avatars/hair-black-eyes-brown-skin-dark.png',
        content: '<img src="assets/images/backgrounds/bg-1.jpg"/>',
        palette: "cyan:500"
    },{
        title: 'Mary Rose',
        subtitle: 'lorem ipsum',
        date:'16/6/2015',
        image: 'assets/images/avatars/hair-grey-eyes-dark-skin-tanned.png',
        content: '<img src="assets/images/backgrounds/bg-2.jpg"/>',
        palette: "cyan:500"
    },{
        title: 'Morris Onions',
        subtitle: 'lorem ipsum',
        date:'12/6/2015',
        image: 'assets/images/avatars/hair-black-eyes-brown-skin-tanned-2.png',
        content: '<img src="assets/images/backgrounds/bg-3.jpg"/>',
        palette: "cyan:500"
    }];

});