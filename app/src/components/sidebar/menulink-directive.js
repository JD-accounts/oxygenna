'use strict';

/**
 * @ngdoc directive
 * @name triAngular.directive:triSidebar
 * @description
 * # sidebar
 */
angular.module('triAngular')
.directive('triMenuLink', function (MenuService) {
    return {
        templateUrl: 'components/sidebar/menulink.html',
        restrict: 'E',
        scope: {
            item: '='
        },
        link: function postLink(scope, element, attrs) {

        }
    };
});
