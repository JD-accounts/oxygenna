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
* @usage
* ```html
* <side-menu-item ng-repeat="item in menu" item="item"></side-menu-item>
* ```
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

            $scope.toggleMenu = function() {
                // send message down the menu from the parent, item is toggled
                $scope.$parent.$parent.$broadcast('toggleMenu', $scope.item, !$scope.item.open);
                // this will close any sibling menus
            };

            $scope.$on('toggleMenu', function(event, item, open) {
                // if this is the item we are looking for
                if($scope.item === item) {
                    $scope.item.open = open;
                }
                else {
                    $scope.item.open = false;
                }
            });

            $scope.linkCSSClass = function() {
                var parent = $element.parent()[0];
                return {
                    'md-hue-1': $scope.item.active,
                    'md-accent': parent.tagName === 'LI',
                    'md-primary': parent.tagName === 'SIDE-MENU'
                };
            }
        }
    };
});