(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('DashboardSalesController', DashboardSalesController);

    /* @ngInject */
    function DashboardSalesController($q, $timeout, SalesService) {
        var vm = this;
        vm.dateRange = {
            start: moment().startOf('month'),
            end: moment().endOf('month')
        };

        vm.salesData = SalesService.generateSales(vm.dateRange);
        vm.chartData = SalesService.createChartData(vm.salesData);

        vm.query = {
            order: 'date',
            limit: 5,
            page: 1
        };
    }
})();