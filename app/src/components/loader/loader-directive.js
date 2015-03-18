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
        template: '<div flex ng-show="active" class="loader" layout="column" layout-fill layout-align="center center"><md-progress-circular class="md-hue-2" md-mode="indeterminate"></md-progress-circular><h2>{{appName}}</h2></div>',
        link: function($scope) {
            $scope.appName = APP.name;
            $scope.active = false;

            $rootScope.$on('$viewContentLoading', function() {
                $scope.active = true;
            });

            $rootScope.$on('$viewContentLoaded', function() {
                $scope.active = false;
            });
        }
    };
});