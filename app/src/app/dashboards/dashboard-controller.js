'use strict';

/**
 * @ngdoc function
 * @name LoginCtrl
 * @module triangular.authentication
 * @kind function
 *
 * @description
 * Invokes the `iterator` function once for each item in `obj` collection, which can be either an
 * object or an array. The `iterator` function is invoked with `iterator(value, key, obj)`, where `value`
 * is the value of an object property or an array element, `key` is the object property key or
 * array element index and obj is the `obj` itself. Specifying a `context` for the function is optional.
 *
 * It is worth noting that `.forEach` does not iterate over inherited properties because it filters
 * using the `hasOwnProperty` method.
 *
 * Unlike ES262's
 * [Array.prototype.forEach](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.18),
 * Providing 'undefined' or 'null' values for `obj` will not throw a TypeError, but rather just
 * return the value provided.
 *
 */



angular.module('triAngular').
controller('DashboardController', function ($scope) {
    $scope.materialLine = {
        type: 'Line',
        data: {
            'cols': [
                {id: 'day', label: 'Day', type: 'number'},
                {id: 'guard', label: 'Guardians of the Galaxy', type: 'number'},
                {id: 'aveng', label: 'The Avengers', type: 'number'},
                {id: 'trans', label: 'Transformers: Age of Extinction', type: 'number'},
            ],
            'rows': [
                {
                    c: [{v: 1}, {v: 37.8}, {v: 80.8}, {v: 41.8}]
                },
                {
                    c: [{v: 2}, {v: 30.9}, {v: 69.5}, {v: 32.4}]
                },
                {
                    c: [{v: 3}, {v: 25.4}, {v: 57}, {v: 25.7}]
                },
                {
                    c: [{v: 4}, {v: 11.7}, {v: 18.8}, {v: 10.5}]
                },
                {
                    c: [{v: 5}, {v: 11.9}, {v: 17.6}, {v: 10.4}]
                },
                {
                    c: [{v: 6}, {v: 8.8}, {v: 13.6},  {v: 7.7}]
                },
                {
                    c: [{v: 7}, {v: 7.6}, {v: 12.3},  {v: 9.6}]
                },
                {
                    c: [{v: 8}, {v: 12.3}, {v: 29.2}, {v: 10.6}]
                },
                {
                    c: [{v: 9}, {v: 16.9}, {v: 42.9}, {v: 14.8}]
                },
                {
                    c: [{v: 10}, {v:12.8}, {v: 30.9}, {v: 11.6}]
                },
                {
                    c: [{v: 11}, {v: 5.3}, {v: 7.9},  {v: 4.7}]
                },
                {
                    c: [{v: 12}, {v: 6.6}, {v: 8.4},  {v: 5.2}]
                },
                {
                    c: [{v: 13}, {v: 4.8}, {v: 6.3},  {v: 3.6}]
                },
                {
                    c: [{v: 14}, {v: 4.2}, {v: 6.2},  {v: 3.4}]
                }
            ]
        },
        options: {
            chart: {
                'title': 'Box Office Earnings in First Two Weeks of Opening',
                subtitle: 'in millions of dollars (USD)',
            },
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
});