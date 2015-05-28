'use strict';

/**
* @ngdoc directive
* @name todoWidget
* @restrict E
* @scope
*
* @description
*
* Adds some todo data
*
* @usage
* ```html
* <widget todo-widget></widget>
* ```
*/
angular.module('triAngularDashboards')
.directive('todoWidget', function() {
    return {
        require: 'widget2',
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