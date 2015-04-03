'use strict';

/**
 * @ngdoc function
 * @name TabsController
 * @module triAngularElements
 * @kind function
 *
 * @description
 *
 * Handles icons element page
 */
angular.module('triAngularElements').
controller('TabsController', function ($scope) {
    $scope.musicList = [{
        genre: 'Rock & Roll',
        albums:[{
            title: 'Abbey Road',
            cover: 'assets/images/elements/albums/abbeyrd.jpg'
        },{
            title: 'Definitely Maybe',
            cover: 'assets/images/elements/albums/maybe.jpg'
        },{
            title: 'The Stone Roses',
            cover: 'assets/images/elements/albums/roses.png'
        }]
    },{
        genre: 'Alternative',
        albums:[{
            title: 'Ágætis Byrjun',
            cover: 'assets/images/elements/albums/agatis.jpg'
        },{
            title: 'Unknown Pleasures',
            cover: 'assets/images/elements/albums/unknown-pleasures.jpg'
        },{
            title: 'Nevermind',
            cover: 'assets/images/elements/albums/nevermind.jpg'
        }]
    },{
        genre: 'Hip Hop',
        albums:[{
            title: 'Straight Outta Compton',
            cover: 'assets/images/elements/albums/compton.jpg'
        },{
            title: '3 Feet High And Rising',
            cover: 'assets/images/elements/albums/soul.jpg'
        },{
            title: 'Paid in Full',
            cover: 'assets/images/elements/albums/rakim.jpg'
        }]
    }];

    $scope.alignTabs = 'bottom';
});