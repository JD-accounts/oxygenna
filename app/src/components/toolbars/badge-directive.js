'use strict';

/**
* @ngdoc directive
* @name badge
* @restrict A
* @scope
*
* @description
*
* Creates a simple badge with a theme background colour
*
* @usage
* ```html
* <badge></badge>
* ```
*/
angular.module('triAngular')
.directive('badge', function (triTheme, $mdTheming) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<span class="tri-badge" ng-style="badgeStyle" ng-transclude></span>',
        link: function ($scope, $element, attrs) {
            var mdClasses = triTheme.getMdClasses($element);
            var intentClass = triTheme.filterIntentClass(mdClasses);

            $mdTheming($element);

            if(intentClass !== '') {
                var $mdTheme = $element.controller('mdTheme');
                var badgeBackground = triTheme.getThemeColor($mdTheme.$mdTheme, intentClass);

                $scope.badgeStyle = {
                    'background-color': triTheme.rgba(badgeBackground.value),
                    'color': triTheme.rgba(badgeBackground.contrast)
                };
            }
        }
    };
});
