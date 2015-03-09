'use strict';

angular.module('triAngular')
.service('SideMenu', function($location, $filter, $translate) {
    var menu = [];
    var activeParent = null;
    var activeItem = null;
    var service = {
        translate: function() {
            // gather all the names used in all menus
            var names = [];
            angular.forEach(menu, function(parentMenu) {
                names.push(parentMenu.name);
                angular.forEach(parentMenu.children, function(menu) {
                    names.push(menu.name);
                });
            });
            // translate all nanes and replace them with translations
            $translate(names).then(function(translations) {
                angular.forEach(menu, function(parentMenu) {
                    parentMenu.name = translations[parentMenu.name];
                    angular.forEach(parentMenu.children, function(menu) {
                        menu.name = translations[menu.name];
                    });
                });
            });
        },
        currentMenu: function() {
            return activeItem;
        },
        addMenu: function(item) {
            menu.push(item);
        },
        getMenu: function() {
            return $filter('orderBy')(menu, 'priority');
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
                        childMenu.active = service.urlOpen(childMenu.url);
                        // also make sure we activate (open) the parent menu
                        if(childMenu.active) {
                            activeItem = childMenu;
                            service.toggleParentMenu(parentMenu, true);
                        }
                    });
                }
                else {
                    parentMenu.active = service.urlOpen(parentMenu.url);;
                }
            });
        },
        urlOpen: function(url) {
            return $location.path().indexOf(url) !== -1;
        }
    };

    return service;
});
