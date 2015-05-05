'use strict';

/**
 * @ngdoc module
 * @name triAngularMenuLevels
 * @description
 *
 * The `triAngularMenuLevels` module adds an UI pages
 */
angular.module('triAngularMenuLevels', [])
.config(function ($translatePartialLoaderProvider, $stateProvider) {
    $translatePartialLoaderProvider.addPart('app/ui');

    $stateProvider
    .state('private.admin.toolbar.default.menulevels', {
        url: '/menu-levels/:level',
        controller: 'LevelController',
        templateUrl: 'app/menulevels/level.tmpl.html',
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'MENU.LEVELS.LEVELS',
        icon: 'icon-receipt',
        type: 'dropdown',
        priority: 6.1,
        children: [{
            name: 'MENU.LEVELS.1-1',
            type: 'dropdown',
            children: [{
                name: 'MENU.LEVELS.2-1',
                type: 'dropdown',
                children: [{
                    name: 'MENU.LEVELS.3-1',
                    type: 'dropdown',
                    children: [{
                        name: 'MENU.LEVELS.4-1',
                        type: 'link',
                        url: '/menu-levels/Item1-1-1-1'
                    },{
                        name: 'MENU.LEVELS.4-2',
                        type: 'link',
                        url: '/menu-levels/Item1-1-1-2'
                    },{
                        name: 'MENU.LEVELS.4-3',
                        type: 'link',
                        url: '/menu-levels/Item1-1-1-3'
                    }]
                }]
            }]
        }]
    });
});
