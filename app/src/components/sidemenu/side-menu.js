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
.directive('sideMenu', function() {
    return {
        restrict: 'E',
        templateUrl: 'components/sidemenu/side-menu.tmpl.html',
        scope: {
            menu: '='
        },
        controller: function() {
            this.selectedItem = null;

            this.toggleSelected = function(item) {
                if(item.type === 'dropdown' && this.isActive(item)) {
                    this.selectedItem = null;
                }
                else {
                    this.selectedItem = item;
                }
            };

            this.isActive = function(item) {
                return item === this.selectedItem;
            };
        }
    };
});