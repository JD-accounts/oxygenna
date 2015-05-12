'use strict';

/**
* @ngdoc directive
* @name chartjsPieWidget
* @restrict A
* @scope
*
* @description
*
* Adds chartjs pie chart data to widget
*
* @usage
* ```html
* <widget chartjs-pie-widget>
* ```
*/
angular.module('triAngularDashboards')
.directive('chartjsPieWidget', function ($timeout, $interval) {
    return {
        require: 'widget',
        restrict: 'A',
        link: function ($scope, $element, attrs, widgetCtrl) {
            widgetCtrl.setLoading(true);

            $timeout(function() {
                widgetCtrl.setLoading(false);
            }, 1500);

            widgetCtrl.setMenu({
                icon: 'icon-more-vert'
            });

            $scope.pieChart = {
                labels: ['Facebook', 'Twitter', 'Google+', 'Others'],
                data: [300, 500, 100, 50]
            };

            function randomData() {
                for(var series = 0; series < $scope.pieChart.series.length; series++) {
                    var row = [];
                    for(var label = 0; label < $scope.pieChart.labels.length; label++) {
                        row.push(Math.floor((Math.random() * 100) + 1));
                    }
                    $scope.pieChart.data.push(row);
                }
            }

            // Simulate async data update
            // c$interval(randomData, 5000);
        }
    };
});