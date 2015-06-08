'use strict';

/**
 * @ngdoc function
 * @name SeedPageController
 * @module triSeedModule
 * @kind function
 *
 * @description
 *
 * Creates some dummy test data for the test seed page
 */

// get the triangular seed module
angular.module('triAngularCalendar')
// create a controller for the seed page and inject the scope directive
.controller('CalendarController', function ($scope) {
    $scope.calendarOptions = {
        header: false,
        height: 'auto',
        selectable: true,
        viewRender: function(view) {
            $scope.currentDay = view.calendar.getDate();
        }
    };

    $scope.agendaOptions = {
        header: false,
        defaultView: 'agendaDay',
    };

    $scope.eventSources = [];
});