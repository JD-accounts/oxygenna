(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('DashboardSalesController', DashboardSalesController);

    /* @ngInject */
    function DashboardSalesController($scope, $q, $timeout, $mdToast, $filter, $mdDialog, SalesService) {
        var vm = this;
        vm.dateRange = {
            start: moment().startOf('week'),
            end: moment().endOf('week')
        };

        vm.query = {
            order: 'date',
            limit: 5,
            page: 1
        };

        ///
        function createData() {
            vm.salesData = SalesService.generateSales(vm.dateRange);
            vm.chartLineData = SalesService.createLineChartData(vm.salesData);
            vm.chartPieData = SalesService.createPieChartData(vm.salesData);
            vm.chartBarData = SalesService.createBarChartData(vm.salesData);
        }

        // events

        $scope.$on('salesChangeDate', function() {
            $mdDialog.show({
                controller: 'DateChangeDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/examples/dashboards/sales/date-change-dialog.tmpl.html',
                locals: {
                    range: vm.dateRange
                }
            })
            .then(function() {
                createData();
                // var toastMessage = 'CALENDAR.EVENT.EVENT-UPDATED';
                // if(angular.isDefined(event.deleteMe) && event.deleteMe === true) {
                //     // remove the event from the calendar
                //     uiCalendarConfig.calendars['triangular-calendar'].fullCalendar('removeEvents', event._id);
                //     // change toast message
                //     toastMessage = 'CALENDAR.EVENT.EVENT-DELETED';
                // }
                // else {
                //     // update event
                //     uiCalendarConfig.calendars['triangular-calendar'].fullCalendar('updateEvent', event);
                // }

                // pop a toast
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('DASHBOARDS.SALES.DATE-UPDATED'))
                    .position('bottom right')
                    .hideDelay(2000)
                );
            });
        });

        // init

        createData();
    }
})();