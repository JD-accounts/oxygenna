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
