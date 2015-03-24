'use strict';

/**
* @ngdoc directive
* @name sideMenu
* @restrict E
* @scope
*
* @description
*
* Handles the main admin sidemenu
*
* @usage
* ```html
* <side-menu></side-menu>
* ```
*/
angular.module('triAngular')
.directive('sideMenu', function($location, $mdTheming, triThemeColors, SideMenu) {
    return {
        restrict: 'E',
        template: '<md-content><side-menu-item ng-repeat="item in menu | orderBy:\'priority\'" item="item"></side-menu-item></md-content>',
        scope: {},
        controller: function($scope, $element) {
            // make sure all menu names are translated
            SideMenu.translate();

            // get the menu structure from the menu service
            $scope.menu = SideMenu.getMenu();

            // add a watch for when the url location changes
            $scope.$on('$locationChangeSuccess', function() {
                // location has changed so update the menu
                $scope.$broadcast('openMenu', $location.path());
            });
        },
        link: function($scope, $element, attrs) {
            $mdTheming($element);
            var $mdTheme = $element.controller('mdTheme');

            attrs.$observe('mdTheme', function() {
                var menuColor = triThemeColors.get($mdTheme.$mdTheme, 'primary');
                $element.css({ 'background-color': menuColor.default });
                $element.children('md-content').css({ 'background-color': menuColor.default });
            });
        }
    };
});