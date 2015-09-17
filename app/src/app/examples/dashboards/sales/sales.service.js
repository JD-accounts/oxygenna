(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .service('SalesService', SalesService);

    /* @ngInject */
    function SalesService() {
        this.generateSales = generateSales;
        this.createChartData = createChartData;
        ////////////////

        function generateSales(dateRange) {
            var salesData = {
                totalSales: 0,
                totalEarnings: 0,
                dayTotals: [],
                orders: []
            };

            var startTime = dateRange.start.toDate();
            var endTime = dateRange.end.toDate();

            for(var date = startTime.getTime(); date < endTime.getTime(); date += 86400000) {
                var salesForTheDay = Math.floor(Math.random() * (100 - 0)) + 0;
                var ordersData = generateOrders(salesForTheDay, date);

                salesData.orders = salesData.orders.concat(ordersData.orders);

                salesData.dayTotals.push({
                    date: moment(date),
                    sales: salesForTheDay,
                    earnings: ordersData.totalEarnings
                });
                salesData.totalSales += salesForTheDay;
                salesData.totalEarnings += ordersData.totalEarnings;
            }

            return salesData;
        }

        function generateOrders(numOrders, date) {
            var ordersData = {
                orders: [],
                totalEarnings: 0
            };
            for(var o = 0; o < numOrders; o++) {
                var order = generateOrder(date);
                ordersData.totalEarnings += order.total;
                ordersData.orders.push(order);
            }

            return ordersData;
        }

        function generateOrder(date) {
            var statuses = ['complete', 'pending', 'delivered'];
            var order = {
                buyer: 'm.onions@gmail.com',
                date: moment(date + Math.floor(Math.random() * (86400000 - 0)) + 0),
                items: [],
                subTotal: 0,
                status: statuses[Math.floor(Math.random() * statuses.length)],
                tax: 0,
                total: 0
            };

            var numItems = Math.floor(Math.random() * (3 - 1)) + 1;

            for(var i = 0; i < numItems; i++) {
                var item = {
                    name: 'Product 1',
                    price: (Math.random() * (100 - 1) + 1).toFixed(2)
                };
                order.subTotal += parseFloat(item.price);

                order.items.push(item);
            }

            order.tax = order.subTotal * 0.2;
            order.total += order.subTotal + order.tax;
            return order;
        }

        function createChartData(salesData) {
            var chartData = {
                labels: [],
                series: ['Sales'],
                options: {
                    maintainAspectRatio: false,
                    datasetFill: false,
                    responsive: true,
                    scaleShowGridLines: false,
                    bezierCurve: true,
                    pointDotRadius: 2,
                    scaleFontColor: '#ffffff',
                    scaleFontSize: 16
                },
                colors: ['#ffffff'],
                data: []
            };

            var row = [];
            for (var i = 0; i < salesData.dayTotals.length; i++) {
                chartData.labels.push(salesData.dayTotals[i].date.format('M/D/YY'));
                row.push(salesData.dayTotals[i].sales);
            }
            chartData.data.push(row);

            return chartData;
        }
    }
})();