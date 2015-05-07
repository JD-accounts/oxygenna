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
angular.module('triAngularDashboards')
.directive('chartjsLineWidget', function ($timeout) {
    return {
        require: 'widget',
        restrict: 'A',
        link: function ($scope, $element, attrs, widgetCtrl) {
            widgetCtrl.setLoading(true);

            $timeout(function() {
                widgetCtrl.setLoading(false);
            }, 3000);

            widgetCtrl.setMenu({
                icon: 'icon-more-vert'
            });
        }
    };
});