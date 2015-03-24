'use strict';

angular.module('triAngular')
.service('SideMenu', function($location, $filter, $translate) {
    var menu = [];
    var activeMenu = null;
    var activeParent = null;
    var activeItem = null;

    function traverse(obj, callback, depth) {
        depth = depth === undefined ? -1 : depth;

        if (obj instanceof Array) {
            depth++;
            for (var i = 0; i < obj.length; i++) {
                traverse(obj[i], callback, depth);
            }
        } else {
            callback(obj, depth);
            if(obj.children !== undefined) {
                traverse(obj.children, callback, depth);
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
            // also add depth attribute
            var names = [];
            service.traverseMenu(function(item, depth) {
                item.depth = depth;
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
