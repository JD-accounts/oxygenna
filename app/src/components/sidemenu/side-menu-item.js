'use strict';

/**
* @ngdoc directive
* @name sideMenuItem
* @restrict E
* @scope
*
* @description
*
* Simple menu link item
*
*/
angular.module('triAngular')
.directive('sideMenuItem', function() {
    return {
        restrict: 'E',
        require: '^sideMenu',
        scope: {
            item: '='
        },
        template: '<div ng-include="itemTemplate"></div>',
        link: function($scope, $element, attrs, $sideMenu) {
            $scope.itemTemplate = 'components/sidemenu/side-menu-' + $scope.item.type + '.tmpl.html';

            $scope.toggleSelected = function() {
                $sideMenu.toggleSelected($scope.item);
            };

            $scope.isActive = function() {
                return $sideMenu.isActive($scope.item);
            };
        }
    };
});