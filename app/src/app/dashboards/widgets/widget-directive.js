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
            title: '@',
            subtitle: '@'
        },
        controller: function($scope) {
            $scope.menu = null;
            $scope.loading = false;

            this.setMenu = function(menu) {
                $scope.menu = menu;
            };

            this.setLoading = function(loading) {
                $scope.loading = loading;
            };
        },
        link: function($scope, $element, attrs) {
            // set the value of the widget layout attribute
            $scope.widgetLayout = attrs.titlePosition === 'left' || attrs.titlePosition === 'right' ? 'row' : 'column';
            // set if the layout-padding attribute will be added
            $scope.widgetLayoutPadding = attrs.contentPadding === undefined ? undefined : true;
            // set the order of the title and content based on title position
            $scope.titleOrder = attrs.titlePosition === 'right' || attrs.titlePosition === 'bottom' ? 2 : 1;
            $scope.contentOrder = attrs.titlePosition === 'right' || attrs.titlePosition === 'bottom' ? 1 : 2;
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

            console.log(attrs.backgroundImage);
            if(attrs.backgroundImage !== undefined) {
                $element.css('background-image', 'url(' + attrs.backgroundImage + ')');
            }
        }
    };
});