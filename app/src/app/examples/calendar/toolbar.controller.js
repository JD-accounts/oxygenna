(function() {
    'use strict';

    angular
        .module('app.examples.calendar')
        .controller('CalendarToolbarController', CalendarToolbarController);

    /* @ngInject */
    function CalendarToolbarController($scope, $state, $element, $mdUtil, $mdSidenav, uiCalendarConfig) {
        var vm = this;
        vm.changeMonth = changeMonth;
        vm.changeView = changeView;
        vm.toolbarTypeClass = toolbarTypeClass;
        vm.openSideNav = openSideNav;
        vm.views = [{
            name: 'CALENDAR.TOOLBAR.VIEWS.MONTH',
            icon: 'icon-view-module',
            viewName: 'month',
            dateFormat: 'MMMM YYYY'
        },{
            name: 'CALENDAR.TOOLBAR.VIEWS.WEEK',
            icon: 'icon-view-week',
            viewName: 'agendaWeek',
            dateFormat: 'w'
        },{
            name: 'CALENDAR.TOOLBAR.VIEWS.DAY',
            icon: 'icon-view-day',
            viewName: 'agendaDay',
            dateFormat: 'Do MMMM YYYY'
        }];
        vm.currentView = vm.views[0];

        //////////////

        function changeMonth(direction) {
            uiCalendarConfig.calendars['triangular-calendar'].fullCalendar(direction);
        }

        function changeView(view) {
            vm.currentView = view;
            uiCalendarConfig.calendars['triangular-calendar'].fullCalendar('changeView', view.viewName);
        }

        function toolbarTypeClass() {
            return vm.extraClass;
        }

        function openSideNav(navID) {
            $mdUtil.debounce(function(){
                $mdSidenav(navID).toggle();
            }, 300)();
        }

        function initToolbar() {
            if(angular.isUndefined($state.current.data)) {
                if(angular.isUndefined($state.current.data.toolbar)) {
                    if($state.current.data.toolbar.extraClass !== false) {
                        vm.extraClass = $state.current.data.toolbar.extraClass;
                    }
                }
            }
        }

        // init

        initToolbar();

        // watchers

        $scope.$on('calendar-changeday', function(event, date) {
            vm.currentDay = date;
        });

        $scope.$on('$stateChangeStart', initToolbar);
    }
})();