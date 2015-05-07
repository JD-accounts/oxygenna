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
* <widget title="'Nice Title'" subtitle="'Subtitle'" title-position="top|bottom|left|right" content-padding overlay-title>content here</widget>
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
            // set the value of the widget layout attribute
            $scope.widgetLayout = attrs.titlePosition === 'bottom' || attrs.titlePosition === 'top' ? 'column' : 'row';
            // set if the layout-padding attribute will be added
            $scope.widgetLayoutPadding = attrs.contentPadding === undefined ? undefined : true;
            // set the order of the title and content based on title position
            $scope.titleOrder = attrs.titlePosition === 'left' || attrs.titlePosition === 'top' ? 1 : 2;
            $scope.contentOrder = attrs.titlePosition === 'left' || attrs.titlePosition === 'top' ? 2 : 1;
            // set if we overlay the title on top of the widget content
            $scope.overlayTitle = attrs.overlayTitle === undefined ? undefined : true;

            $mdTheming($element);

            var $mdTheme = $element.controller('mdTheme');

            if(attrs.class !== undefined) {
                $element.addClass(attrs.class);
            }

            if(attrs.background !== undefined) {
                var background = triTheme.getThemeColor($mdTheme.$mdTheme, attrs.background);
                $element.css({
                    'background-color': triTheme.rgba(background.value),
                    'color': triTheme.rgba(background.contrast)
                });
            }

            if(attrs.backgroundImage !== undefined) {
                $element.css('background-image', 'url('+attrs.backgroundImage+')');
            }
        }
    };
});