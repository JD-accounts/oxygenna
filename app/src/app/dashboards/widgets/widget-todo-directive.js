'use strict';

/**
* @ngdoc directive
* @name widget
* @restrict E
* @scope
*
* @description
*
* Creates a dashboard weather widget
*
* @usage
* ```html
* <widget weather-todo></widget>
* ```
*/
angular.module('triAngularDashboards')
.directive('todoWidget', function($http, $compile, $templateCache) {
    return {
        require: 'widget',
        restrict: 'A',
        link: function($scope, $element, attrs, widgetCtrl) {
            $scope.todos = [{
                name: 'Buy Milk',
                done: false
            },{
                name: 'Fix Server',
                done: true
            },{
                name: 'Walk the dog',
                done: false
            },{
                name: 'Upload files',
                done: false
            }]
        }
    };
});