'use strict';

/**
* @ngdoc directive
* @name calendarWidget
* @restrict E
* @scope
*
* @description
*
* Adds some calendar data
*
* @usage
* ```html
* <widget calendar-widget></widget>
* ```
*/
angular.module('triAngularDashboards')
.directive('calendarWidget', function(uiCalendarConfig, $rootScope, $filter, $translate) {
    return {
        require: 'widget',
        restrict: 'A',
        controller: function($scope) {
            $scope.calendarEvents = [];
        },
        link: function($scope) {
            // calendar strings to be translated
            // calendar widget comes from bower, so we have to translate its strings in advance in the controller
            $scope.dayNamesShort = ['DASHBOARDS.WIDGETS.CALENDAR.DAYNAMESSHORT.SUN', 'DASHBOARDS.WIDGETS.CALENDAR.DAYNAMESSHORT.MON', 'DASHBOARDS.WIDGETS.CALENDAR.DAYNAMESSHORT.TUE', 'DASHBOARDS.WIDGETS.CALENDAR.DAYNAMESSHORT.WED', 'DASHBOARDS.WIDGETS.CALENDAR.DAYNAMESSHORT.THU', 'DASHBOARDS.WIDGETS.CALENDAR.DAYNAMESSHORT.FRI', 'DASHBOARDS.WIDGETS.CALENDAR.DAYNAMESSHORT.SAT'];            
            $scope.monthNames = ['DASHBOARDS.WIDGETS.CALENDAR.MONTHNAMES.JANUARY','DASHBOARDS.WIDGETS.CALENDAR.MONTHNAMES.FEBRUARY','DASHBOARDS.WIDGETS.CALENDAR.MONTHNAMES.MARCH','DASHBOARDS.WIDGETS.CALENDAR.MONTHNAMES.APRIL','DASHBOARDS.WIDGETS.CALENDAR.MONTHNAMES.MAY','DASHBOARDS.WIDGETS.CALENDAR.MONTHNAMES.JUNE','DASHBOARDS.WIDGETS.CALENDAR.MONTHNAMES.JULY','DASHBOARDS.WIDGETS.CALENDAR.MONTHNAMES.AUGUST','DASHBOARDS.WIDGETS.CALENDAR.MONTHNAMES.SEPTEMBER','DASHBOARDS.WIDGETS.CALENDAR.MONTHNAMES.OCTOBER','DASHBOARDS.WIDGETS.CALENDAR.MONTHNAMES.NOVEMBER','DASHBOARDS.WIDGETS.CALENDAR.MONTHNAMES.DECEMBER'];

            $scope.calendarOptions = {
                header: false,
                height: 'auto',               
                dayNamesShort : [],
                monthNames: [],
                viewRender: function(view) {
                    $scope.currentDay = view.calendar.getDate();
                }
            };

            $scope.changeMonth = function(direction) {
                uiCalendarConfig.calendars.calendarWidget.fullCalendar(direction);
            };            

            $scope.translateCalendar = function(){
                $translate($scope.dayNamesShort).then(function (translations) {                    
                    $scope.calendarOptions.dayNamesShort.length = 0;
                    angular.forEach(translations, function(tr){
                        $scope.calendarOptions.dayNamesShort.push(tr);
                    });
                });

                $translate($scope.monthNames).then(function (translations) {                    
                    $scope.calendarOptions.monthNames.length = 0;
                    angular.forEach(translations, function(tr){
                        $scope.calendarOptions.monthNames.push(tr);
                    });
                });
            };

            $scope.translateCalendar();

            $rootScope.$on('$translateChangeSuccess', function () {               
                $scope.translateCalendar();
            });            
        }
    };
});