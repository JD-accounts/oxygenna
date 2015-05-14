'use strict';

/**
* @ngdoc directive
* @name triLoader
* @restrict E
* @scope
*
* @description
*
* Adds a loader screen that takes up 100%
*
* @usage
* ```html
* <tri-loader></tri-loader>
* ```
*/
angular.module('triAngular')
.directive('triLoader', function($rootScope, APP) {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template: '<div flex class="loader" ng-show="active" layout="column" layout-fill layout-align="center center"><md-progress-circular md-mode="indeterminate"></md-progress-circular><h3 class="md-headline">{{appName}}</h3></div>',
        link: function($scope) {
            $scope.appName = APP.name;
            $scope.active = true;

            $rootScope.$on('$viewContentLoading', function() {
                $scope.active = true;
            });

            $rootScope.$on('$viewContentLoaded', function() {
                // $scope.active = false;
            });
        }
    };
});