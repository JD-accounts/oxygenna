'use strict';

/**
 * @ngdoc directive
 * @name triAngular.directive:triSidebar
 * @description
 * # sidebar
 */
angular.module('triAngular')
.directive('triSidebar', function (MenuService) {
    return {
        templateUrl: 'components/sidebar/sidebar.html',
        restrict: 'E',
        link: function postLink(scope, element, attrs) {
            scope.menu = {
                items: MenuService.getMenuItems()
            };
        }
    };
});
