'use strict';

/**
 * @ngdoc function
 * @name LoginCtrl
 * @module triangular.authentication
 * @kind function
 *
 *
 */
angular.module('triAngularDashboards').
controller('DashboardController', function ($scope) {
    $scope.geoChart = {
        type: 'GeoChart',
        data: [
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['RU', 700]
        ]
    };

    $scope.pieChart = {
        type: 'PieChart',
        data: [
            ['Task', 'Hours per Day'],
            ['Facebook', 15],
            ['Google', 20],
            ['Twitter', 8],
        ],
        options: {
            legend: 'none',
            pieSliceText: 'label',
        }
    };

    $scope.lineChart = {
        type: 'Line',
        data: {
            'cols': [
                {id: 'day', label: 'Day', type: 'number'},
                {id: 'sales', label: 'Sales', type: 'number'},
                {id: 'income', label: 'Income', type: 'number'}
            ],
            'rows': [
                {
                    c: [{v: 14}, {v: 37.8}, {v: 90.8}]
                },
                {
                    c: [{v: 13}, {v: 30.9}, {v: 69.5}]
                },
                {
                    c: [{v: 12}, {v: 25.4}, {v: 57}]
                },
                {
                    c: [{v: 11}, {v: 11.7}, {v: 18.8}]
                },
                {
                    c: [{v: 10}, {v: 11.9}, {v: 17.6}]
                },
                {
                    c: [{v: 9}, {v: 8.8}, {v: 13.6}]
                },
                {
                    c: [{v: 8}, {v: 7.6}, {v: 12.3}]
                },
                {
                    c: [{v: 7}, {v: 12.3}, {v: 29.2}]
                },
                {
                    c: [{v: 6}, {v: 16.9}, {v: 42.9}]
                },
                {
                    c: [{v: 5}, {v:12.8}, {v: 30.9}]
                },
                {
                    c: [{v: 4}, {v: 5.3}, {v: 7.9}]
                },
                {
                    c: [{v: 3}, {v: 6.6}, {v: 8.4}]
                },
                {
                    c: [{v: 2}, {v: 4.8}, {v: 6.3}]
                },
                {
                    c: [{v: 1}, {v: 4.2}, {v: 6.2}]
                }
            ]
        },
        options: {
            backgroundColor: 'blue',
            legend: {
                position: 'none'
            },
            animation : {
                duration: 3000,
                easing: 'in'
            }
        },
        formatters: {}
    };

    $scope.counterData = {
        growthIncome: 89,
        newVisitors: 10323,
        salesIncreases: 254,
        conversionRate: 22
    };
});