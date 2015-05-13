'use strict';

/**
 * @ngdoc function
 * @name GalleryController
 * @module triAngularExtras
 * @kind function
 *
 *
 */
angular.module('triAngularExtras').
controller('GalleryController', function ($scope) {    
    $scope.items = [{
        title: 'Abbey Road',
        image: 'assets/images/elements/albums/abbeyrd.jpg',
        span:{ col: 1, row: 1}
    },{
        title: 'Definitely Maybe',
        image: 'assets/images/elements/albums/maybe.jpg',
        span:{ col: 2, row: 2}
    },{
        title: 'The Stone Roses',
        image: 'assets/images/elements/albums/roses.png',
        span:{ col: 1, row: 1}
    },{
        title: 'Ágætis Byrjun',
        image: 'assets/images/elements/albums/agatis.jpg',
        span:{ col: 2, row: 1}
    },{
        title: 'Unknown Pleasures',
        image: 'assets/images/elements/albums/unknown-pleasures.jpg',
        span:{ col: 1, row: 2}
    },{
        title: 'Nevermind',
        image: 'assets/images/elements/albums/nevermind.jpg',
        span:{ col: 1, row: 1}
    },{
        title: 'Straight Outta Compton',
        image: 'assets/images/elements/albums/compton.jpg',
        span:{ col: 1, row: 1}
    },{
        title: '3 Feet High And Rising',
        image: 'assets/images/elements/albums/soul.jpg',
        span:{ col: 1, row: 1}
    },{
        title: 'Paid in Full',
        image: 'assets/images/elements/albums/rakim.jpg',
        span:{ col: 2, row: 1}
    }];
});