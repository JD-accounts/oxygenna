'use strict';

/**
 * @ngdoc function
 * @name CalendarController
 * @module triAngularCalendar
 * @kind function
 *
 * @description
 *
 * Handles the main calendar page
 */

angular.module('triAngularCalendar')
.controller('CalendarController', function ($scope, $mdDialog, $mdToast, $filter, uiCalendarConfig) {
    $scope.calendarOptions = {
        contentHeight: 'auto',
        selectable: true,
        editable: true,
        viewRender: function(view) {
            $scope.currentDay = view.calendar.getDate();
        },
        dayClick: function(date, jsEvent, view) {
            $scope.currentDay = date;
        },
        eventClick: function(calEvent, jsEvent, view) {
            var eventCopy = angular.copy(calEvent)
            eventCopy.start = eventCopy.start.toDate();
            if(eventCopy.end) {
                eventCopy.end = eventCopy.end.toDate();
            }
            $mdDialog.show({
                controller: 'EventDialogController',
                templateUrl: 'app/calendar/event-dialog.tmpl.html',
                targetEvent: jsEvent,
                focusOnOpen: false,
                locals: {
                    dialogData: {
                        title: 'CALENDAR.EDIT_EVENT',
                        confirmButtonText: 'CALENDAR.EDIT'
                    },
                    event: eventCopy
                }
            })
            .then(function(event) {
                console.log(event);
                uiCalendarConfig.calendars['triangular-calendar'].fullCalendar('updateEvent', event);
                console.log($scope.eventSources);
                // $scope.eventSources[0].events.push(event);
                // $mdToast.show(
                //     $mdToast.simple()
                //     .content($filter('translate')('CALENDAR.EVENT.EVENT-CREATED'))
                //     .position('bottom right')
                //     .hideDelay(2000)
                // );
            });
        }
    };

    $scope.eventSources = [{
        events: []
    }];

    $scope.addEvent = function($event) {
        $mdDialog.show({
            controller: 'EventDialogController',
            templateUrl: 'app/calendar/event-dialog.tmpl.html',
            targetEvent: $event,
            focusOnOpen: false,
            locals: {
                dialogData: {
                    title: 'CALENDAR.ADD_EVENT',
                    confirmButtonText: 'CALENDAR.ADD'
                },
                event: {
                    title: $filter('translate')('CALENDAR.EVENT.NEW-EVENT'),
                    start: $scope.currentDay.toDate(),
                    palette: 'cyan'
                }
            }
        })
        .then(function(event) {
            $scope.eventSources[0].events.push(event);
            $mdToast.show(
                $mdToast.simple()
                .content($filter('translate')('CALENDAR.EVENT.EVENT-CREATED'))
                .position('bottom right')
                .hideDelay(2000)
            );
        });
    };
});