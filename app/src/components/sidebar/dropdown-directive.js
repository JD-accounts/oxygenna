'use strict';

/**
 * @ngdoc directive
 * @name triAngular.directive:triDropdown
 * @description
 * # Dropdown Menu Item
 */
angular.module('triAngular')
.directive('triDropdown', function () {
    return {
        templateUrl: 'components/sidebar/dropdown.html',
        restrict: 'E',
        scope: {
            item: '='
        },
        link: function postLink(scope, element, attrs) {
            scope.isOpen = false;

            scope.openMenu = function() {
                scope.isOpen = !scope.isOpen;
            }

            scope.iconClass = function() {
                return scope.isOpen ? 'toggled' : '';
            }
        }
    };
});
