'use strict';

/**
* @ngdoc directive
* @name googleGeochartWidget
* @restrict E
* @scope
*
* @description
*
* Creates a dashboard geochart widget
*
* @usage
* ```html
* <tri-widget google-geochart-widget></tri-widget>
* ```
*/
angular.module('triAngularDashboards')
.directive('googleGeochartWidget', function() {
    return {
        require: 'widget',
        restrict: 'A',
        link: function($scope) {
            $scope.geoChartData = {
                type: 'GeoChart',
                data: [
                    ['Country', 'Popularity'],
                    ['Germany', 200],
                    ['United States', 300],
                    ['Brazil', 400],
                    ['Canada', 500],
                    ['France', 600],
                    ['RU', 700]
                ]
            };
        }
    };
});