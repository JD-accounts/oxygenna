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
.directive('sideMenuItem', function($location) {
    return {
        restrict: 'E',
        require: '^sideMenu',
        scope: {
            item: '='
        },
        template: '<div ng-include="itemTemplate"></div>',
        link: function($scope, $element, attrs, $sideMenu) {
            // load a template for this directive based on the type ( link | dropdown )
            $scope.itemTemplate = 'components/sidemenu/side-menu-' + $scope.item.type + '.tmpl.html';

            /***
            * Menu Click Handlers
            ***/
            $scope.toggleMenu = function() {
                // send message down the menu from the parent, item is toggled
                // this will close any sibling menus
                $scope.$parent.$parent.$broadcast('toggleMenu', $scope.item, !$scope.item.open);
            };

            // this event ensures that any sibling menu items are closed when menu item is opened
            $scope.$on('toggleMenu', function(event, item, open) {
                // if this is the item we are looking for
                if($scope.item === item) {
                    $scope.item.open = open;
                }
                else {
                    $scope.item.open = false;
                }
            });

            /***
            * URL Change Handlers
            ***/

            // on first init check if we are the current menu item
            if(urlCheck($location.path())) {
                openMenu();
            }

            // opens the menu then calls its parents to also open
            function openMenu() {
                $scope.item.active = true;
                $scope.item.open = true;
                $scope.$emit('openParents');
            }

            // checks if a item url is the same as param
            function urlCheck(url) {
                return url.indexOf($scope.item.url) !== -1;
            }

            // url update event close all menus and open only the url menu
            $scope.$on('openMenu', function(event, url) {
                $scope.item.active = false;
                $scope.item.open = false;
                if(urlCheck(url)) {
                    openMenu();
                }
            });

            // this event is emitted up the tree to open parent menus
            $scope.$on('openParents', function(event) {
                // openParents event so open the parent item
                $scope.item.active = true;
                $scope.item.open = true;
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