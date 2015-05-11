'use strict';

/**
* @ngdoc directive
* @name chatWidget
* @restrict E
* @scope
*
* @description
*
* Adds some chat data
*
* @usage
* ```html
* <widget chat-widget></widget>
* ```
*/
angular.module('triAngularDashboards')
.directive('chatWidget', function(uiCalendarConfig) {
    return {
        require: 'widget',
        restrict: 'A',
        link: function($scope, $element, attrs, widgetCtrl) {
            $scope.conversation = [{
                name: 'Morris Onions',
                image: 'assets/images/avatars/avatar-3.png',
                message: 'Hi there how are you?',
                userClass: 'user-left'
            },{
                name: 'Danny Ings',
                image: 'assets/images/avatars/avatar-5.png',
                message: 'Howsitgowin?',
                userClass: 'user-right'
            },{
                name: 'Morris Onions',
                image: 'assets/images/avatars/avatar-3.png',
                message: 'We need thos images ASAP!',
                userClass: 'user-left'
            },{
                name: 'Danny Ings',
                image: 'assets/images/avatars/avatar-5.png',
                message: 'Me John big tree.',
                userClass: 'user-right'
            }];
        }
    };
});