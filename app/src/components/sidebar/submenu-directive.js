'use strict';

/**
 * @ngdoc directive
 * @name triAngular.directive:triSidebar
 * @description
 * # sidebar
 */
angular.module('triAngular')
.directive('subMenu', function () {
    return {
        templateUrl: 'components/sidebar/submenu.html',
        restrict: 'E',
        scope: {
            section: '='
        },
        link: function postLink(scope, element, attrs) {

        }
    };
});
