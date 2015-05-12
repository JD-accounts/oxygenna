'use strict';

/**
* @ngdoc directive
* @name chartjsLineWidget
* @restrict A
* @scope
*
* @description
*
* Adds chartjs line chart data to widget
*
* @usage
* ```html
* <widget chartjs-line-widget>
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
            }, 1500);

            widgetCtrl.setMenu({
                icon: 'icon-more-vert'
            });

            $scope.lineChart = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                series: ['Pageviews', 'Visits'],
                options: {
                    datasetFill: true
                },
                data: []
            };

            function randomData() {
                $scope.lineChart.data = [];
                for(var series = 0; series < $scope.lineChart.series.length; series++) {
                    var row = [];
                    for(var label = 0; label < $scope.lineChart.labels.length; label++) {
                        row.push(Math.floor((Math.random() * 100) + 1));
                    }
                    $scope.lineChart.data.push(row);
                }
            }

            // Simulate async data update
            $interval(randomData, 5000);
        }
    };
});