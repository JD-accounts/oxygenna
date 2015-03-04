'use strict';

angular.module('triAngular')
.factory('MenuService', function($location) {
    var menu = [];
    var activeParent = null;
    var service = {
        buildMenu: function() {
            if(menu.length === 0) {
                menu.push({
                    name: 'Dashboards',
                    icon: 'icon-home',
                    type: 'dropdown',
                    children: [{
                        name: 'Dashboard 1',
                        icon: 'icon-stars',
                        url: '/dashboard1',
                        type: 'link',
                    },{
                        name: 'Dashboard 2',
                        icon: 'icon-stars',
                        url: '/dashboard2',
                        type: 'link',
                    }]
                });

                menu.push({
                    name: 'Email',
                    icon: 'icon-email',
                    type: 'dropdown',
                    children: [{
                        name: 'Inbox',
                        icon: 'icon-inbox',
                        url: '/inbox',
                        type: 'link',
                    }]
                });

                menu.push({
                    name: 'Extras',
                    icon: 'icon-add-box',
                    type: 'dropdown',
                    children: [{
                        name: 'Login',
                        icon: 'icon-person',
                        url: '/',
                        type: 'link',
                    },{
                        name: 'Sign Up',
                        icon: 'icon-person-add',
                        url: '/signup',
                        type: 'link',
                    },{
                        name: 'Forgot Password',
                        icon: 'icon-live-help',
                        url: '/forgot',
                        type: 'link',
                    },{
                        name: 'Lock Page',
                        icon: 'icon-lock',
                        url: '/lock',
                        type: 'link',
                    }]
                });
            }
            return menu;
        },
        toggleParentMenu: function(item, open) {
            // if open not set toggle the menu if the item is currently open (activeParent === item)
            var openMenu = open ? open : !(activeParent === item);
            // deactivate previously open menu if set
            if(null !== activeParent) {
                activeParent.active = false;
            }
            // open / close the menu
            item.active = openMenu;
            // store this as the new active parent menu unless closed set to null
            activeParent = openMenu ? item : null;
        },
        updateLocationState: function() {
            // check all menu items and set their active state
            angular.forEach(menu, function(parentMenu) {
                // if menu has children we check if they are active
                if(parentMenu.type === 'dropdown') {
                    parentMenu.active = false;
                    angular.forEach(parentMenu.children, function(childMenu) {
                        // if url is pointing to current menu item url then it is active
                        childMenu.active = childMenu.url === $location.path();
                        // also make sure we activate (open) the parent menu
                        if(childMenu.active) {
                            service.toggleParentMenu(parentMenu, true);
                        }
                    });
                }
            });
        }
    };

    return service;
});
