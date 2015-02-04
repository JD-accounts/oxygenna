'use strict';

/**
 * @ngdoc directive
 * @name triAngular.directive:triMenulink
 * @description
 * # Simple Menu link
 */
angular.module('triAngular')
.directive('triMenulink', function () {
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
