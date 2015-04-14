'use strict';

/**
* @ngdoc directive
* @name widget
* @restrict E
* @scope
*
* @description
*
* Creates a dashboard widget
*
* @usage
* ```html
* <widget title="'Nice Title'" subtitle="'Subtitle'">content here</widget>
* ```
*/
angular.module('triAngularDashboards')
.directive('widget', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/dashboards/widgets/widget.tmpl.html',
        transclude: true,
        replace: true,
        scope: {
            title: '=',
            subtitle: '='
        },
        link: function($scope, $element, attrs) {
        }
    };
});