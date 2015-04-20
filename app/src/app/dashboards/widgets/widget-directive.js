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
.directive('widget', function(triTheme, $mdTheming) {
    return {
        restrict: 'E',
        templateUrl: 'app/dashboards/widgets/widget.tmpl.html',
        transclude: true,
        replace: true,
        scope: {
            title: '=',
            subtitle: '=',
            menu: '='
        },
        link: function($scope, $element, attrs) {
            $mdTheming($element);

            var $mdTheme = $element.controller('mdTheme');

            if(attrs.background !== undefined) {
                var background = triTheme.getThemeColor($mdTheme.$mdTheme, attrs.background);
                $element.css({
                    'background-color': triTheme.rgba(background.value),
                    'color': triTheme.rgba(background.contrast)
                });
            }
        }
    };
});