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
.directive('chartjsLineWidget', function ($timeout, $interval) {
    return {
        require: 'widget',
        restrict: 'A',
        link: function ($scope, $element, attrs, widgetCtrl) {
            widgetCtrl.setLoading(true);

            $timeout(function() {
                widgetCtrl.setLoading(false);
                randomData();
            }, 3000);

            widgetCtrl.setMenu({
                icon: 'icon-more-vert'
            });

            $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
            $scope.series = ['Series A', 'Series B'];
            $scope.options = {
                datasetFill: true,
                legendTemplate: ''
            };

            function randomData() {
                $scope.data = [];
                for(var series = 0; series < $scope.series.length; series++) {
                    var row = [];
                    for(var label = 0; label < $scope.labels.length; label++) {
                        row.push(Math.floor((Math.random() * 100) + 1));
                    }
                    $scope.data.push(row);
                }
            }

            // Simulate async data update
            // $interval(randomData, 5000);
        }
    };
});