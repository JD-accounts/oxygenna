'use strict';

angular.module('triAngular')
.factory('MenuService', function() {
    return {
        getMenuItems: function() {
            var menuItems = [];
            // dashboards
            menuItems.push({
                name: 'Dashboards',
                type: 'dropdown',
                children: [{
                    name: 'Dashboard 1',
                    url: '/dashboard1',
                    type: 'link',
                },{
                    name: 'Dashboard 2',
                    url: '/dashboard2',
                    type: 'link',
                }]
            });

            return menuItems;
        }
    }
});
