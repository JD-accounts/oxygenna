'use strict';

/**
 * @ngdoc function
 * @name IntroductionController
 * @module triAngularDashboards
 * @kind function
 *
 *
 */
angular.module('triAngularDashboards').
controller('IntroductionController', function ($scope) {
    $scope.featureRows = [
        [{
            name: 'Fully Responsive',
            icon: 'icon-computer',
            palette: 'blue',
            hue: '500'
        },{
            name: 'Beautiful Themes',
            icon: 'icon-palette',
            palette: 'blue',
            hue: '600'
        },{
            name: 'API Ready',
            icon: 'icon-share',
            palette: 'blue',
            hue: '700'
        },{
            name: '5 Star Support',
            icon: 'icon-star',
            palette: 'blue',
            hue: '800'
        }],
        [{
            name: 'Built with AngularJS',
            icon: 'fa fa-google',
            palette: 'green',
            hue: '500'
        },{
            name: 'Angular Material',
            icon: 'fa fa-th-large',
            palette: 'green',
            hue: '600'
        },{
            name: 'Gulp Build',
            icon: 'fa fa-terminal',
            palette: 'green',
            hue: '700'
        },{
            name: 'SASS Stylesheets',
            icon: 'fa fa-css3',
            palette: 'green',
            hue: '800'
        }]
    ];
});