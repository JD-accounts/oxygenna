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
* <form name="signup">
*     <input name="password" type="password" ng-model="user.password" same-password="signup.confirm" />
*     <input name="confirm" type="password" ng-model="user.confirm" same-password="signup.confirm" />
* </form>
* ```
*/
angular.module('triAngular')
.directive('sideMenu', function($location, $rootScope, MenuService) {
    return {
        restrict: 'E',
        templateUrl: 'components/sidemenu/side-menu.tmpl.html',
        scope: {},
        controller: function($scope) {
            // get the menu structure from the menu service
            $scope.menu = MenuService.buildMenu();
            // update the menu statuses based on current location
            MenuService.updateLocationState();

            // add a watch for when the url location changes
            $rootScope.$on('$locationChangeSuccess', function() {
                // location has changed so update menu
                MenuService.updateLocationState();
            });

            // when user clicks to open a menu open it using menu service
            this.openMenu = function(item) {
                MenuService.openParentMenu(item);
            };
        }
    };
});