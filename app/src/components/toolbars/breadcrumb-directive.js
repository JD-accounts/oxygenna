'use strict';

/**
* @ngdoc directive
* @name breadcrumb
* @restrict A
* @scope
*
* @description
*
* Handles the default toolbar breadcrumbs - works together with the breadcrumb directive recusively
*
* @usage
* ```html
* <span breadcrumb="breadcrumb">
* ```
*/
angular.module('triAngular')
.directive('breadcrumb', function ($compile) {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            breadcrumb: '='
        },
        template: '<span>{{breadcrumb.name}}<md-icon md-font-icon="icon-chevron-right" ng-show="breadcrumb.children.length > 0"></md-icon></span>',
        link: function (scope, element) {
            var collectionSt = '<span breadcrumbs="breadcrumb.children"></span>';
            if (angular.isArray(scope.breadcrumb.children)) {
                $compile(collectionSt)(scope, function(cloned) {
                    element.append(cloned);
                });
            }
        }
    };
});