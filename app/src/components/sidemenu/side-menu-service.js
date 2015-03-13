'use strict';

angular.module('triAngular')
.service('SideMenu', function($location, $filter, $translate) {
    var menu = [];
    var activeMenu = null;
    var activeParent = null;
    var activeItem = null;

    function traverse(obj, callback) {
        if (obj instanceof Array) {
            for (var i = 0; i < obj.length; i++) {
                traverse(obj[i], callback);
            }
        } else {
            callback(obj);
            if(obj.children !== undefined) {
                traverse(obj.children, callback);
            }
        }
    }

    var service = {
        addMenu: function(item) {
            menu.push(item);
        },
        getMenu: function() {
            return menu;
        },
        translate: function() {
            // gather all the names used in all menus
            var names = [];
            service.traverseMenu(function(item) {
                names.push(item.name);
            });
            // translate all nanes and replace them with translations
            $translate(names).then(function(translations) {
                service.traverseMenu(function(item) {
                    item.name = translations[item.name];
                });
            });
        },
        traverseMenu: function(callback) {
            traverse(menu, callback);
        },
        getPath: function() {
            var path = [];
            service.traverseMenu(function(item) {
                if(item.active) {
                    path.push(item);
                }
            })
            return path;
        }
    };

    return service;
});
