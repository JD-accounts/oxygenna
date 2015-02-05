'use strict';

angular.module('triAngular')
.factory('MenuService', function() {
    var menu = {
        currentSelected: null,
        items: []
    };
    // create menu here
    // home link
    menu.items.push({
        name: 'home',
        type: 'link',
        url: '/dashboard1'
    });
    // dashboards
    menu.items.push({
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

    return {
        getMenuItems: function() {
            return menu.items;
        },
        setSelected: function(menuItem) {
            menu.currentSelected = menuItem;
        },
        isSelected: function(menuItem) {
            return menuItem === menu.currentSelected;
        }
    }
});
