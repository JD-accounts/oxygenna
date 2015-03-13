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
.directive('sideMenu', function($location, SideMenu) {
    return {
        restrict: 'E',
        template: '<side-menu-item ng-repeat="item in menu | orderBy:\'priority\'" item="item"></side-menu-item>',
        scope: {},
        controller: function($scope) {
            // make sure all menu names are translated
            SideMenu.translate();

            // get the menu structure from the menu service
            $scope.menu = SideMenu.getMenu();

            // add a watch for when the url location changes
            $scope.$on('$locationChangeSuccess', function() {
                // location has changed so update the menu
                $scope.$broadcast('openMenu', $location.path());
            });
        }
    };
});