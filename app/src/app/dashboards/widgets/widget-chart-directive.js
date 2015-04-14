'use strict';

/**
* @ngdoc directive
* @name widget
* @restrict E
* @scope
*
* @description
*
* Creates a dashboard chart widget
*
* @usage
* ```html
* <widget-chart data="myData"></widget-chart>
* ```
*/
angular.module('triAngularDashboards')
.directive('widgetChart', function($compile) {
    return {
        restrict: 'E',
        template: '<div></div>',
        scope: {
            title: '=',
            subtitle: '=',
            data: '='
        },
        replace: true,
        link: function($scope, $element, attrs) {
            var chart = $compile('<widget title="title" subtitle="subtitle"><div class="google-chart" google-chart chart="data"/></div></widget>')($scope);
            $element.replaceWith(chart);
        }
    };
});