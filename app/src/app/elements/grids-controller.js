'use strict';

/**
 * @ngdoc function
 * @name GridsController
 * @module triAngularElements
 * @kind function
 *
 * @description
 *
 * Handles dialog element page
 */
angular.module('triAngularElements').
controller('GridsController', function ($scope) {
    $scope.albums = [{
        title: 'Abbey Road',
        cover: 'assets/images/elements/albums/abbeyrd.jpg'
    },{
        title: 'Definitely Maybe',
        cover: 'assets/images/elements/albums/maybe.jpg'
    },{
        title: 'The Stone Roses',
        cover: 'assets/images/elements/albums/roses.png'
    },{
        title: 'Ágætis Byrjun',
        cover: 'assets/images/elements/albums/agatis.jpg'
    },{
        title: 'Unknown Pleasures',
        cover: 'assets/images/elements/albums/unknown-pleasures.jpg'
    },{
        title: 'Nevermind',
        cover: 'assets/images/elements/albums/nevermind.jpg'
    },{
        title: 'Straight Outta Compton',
        cover: 'assets/images/elements/albums/compton.jpg'
    },{
        title: '3 Feet High And Rising',
        cover: 'assets/images/elements/albums/soul.jpg'
    },{
        title: 'Paid in Full',
        cover: 'assets/images/elements/albums/rakim.jpg'
    }];
});