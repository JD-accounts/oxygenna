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
.controller('CalendarController', function ($scope, $rootScope, $mdDialog, $mdToast, $filter, $element, uiCalendarConfig) {
    $scope.calendarOptions = {
        contentHeight: 'auto',
        selectable: true,
        editable: true,
        header: false,
        viewRender: function(view) {
            // change day
            $scope.currentDay = view.calendar.getDate();
            // update toolbar with new day for month name
            $rootScope.$broadcast('calendar-changeday', $scope.currentDay);
            // update background image for month
            $scope.backgroundImage = 'assets/images/calendar/' + ($scope.currentDay.month()+1) + '.jpg';
        },
        dayClick: function(date, jsEvent, view) {
            $scope.currentDay = date;
        },
        eventClick: function(calEvent, jsEvent, view) {
            $mdDialog.show({
                controller: 'EventDialogController',
                templateUrl: 'app/calendar/event-dialog.tmpl.html',
                targetEvent: jsEvent,
                focusOnOpen: false,
                locals: {
                    dialogData: {
                        title: 'CALENDAR.EDIT-EVENT',
                        confirmButtonText: 'CALENDAR.SAVE'
                    },
                    event: calEvent,
                    edit: true
                }
            })
            .then(function(event) {
                var toastMessage = 'CALENDAR.EVENT.EVENT-UPDATED';
                if(event.deleteMe !== undefined) {
                    // remove the event from the calendar
                    uiCalendarConfig.calendars['triangular-calendar'].fullCalendar('removeEvents', event._id);
                    // change toast message
                    toastMessage = 'CALENDAR.EVENT.EVENT-DELETED';
                }
                else {
                    // update event
                    uiCalendarConfig.calendars['triangular-calendar'].fullCalendar('updateEvent', event);
                }

                // pop a toast
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')(toastMessage))
                    .position('bottom right')
                    .hideDelay(2000)
                );
            });
        }
    };

    $scope.eventSources = [{
        events: []
    }];

    $scope.addEvent = function($event) {
        var inAnHour = moment($scope.currentDay).add(1, 'h');
        $mdDialog.show({
            controller: 'EventDialogController',
            templateUrl: 'app/calendar/event-dialog.tmpl.html',
            targetEvent: $event,
            focusOnOpen: false,
            locals: {
                dialogData: {
                    title: 'CALENDAR.ADD-EVENT',
                    confirmButtonText: 'CALENDAR.ADD'
                },
                event: {
                    title: $filter('translate')('CALENDAR.EVENT.NEW-EVENT'),
                    allDay: false,
                    start: $scope.currentDay,
                    end: inAnHour,
                    palette: 'cyan'
                },
                edit: false
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