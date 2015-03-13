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
        name: 'Menu Levels',
        icon: 'icon-receipt',
        type: 'dropdown',
        priority: 2,
        children: [{
            name: 'Level 1-1',
            icon: 'icon-receipt',
            type: 'dropdown',
            children: [{
                name: 'Level 2-1',
                icon: 'icon-receipt',
                type: 'dropdown',
                children: [{
                    name: 'Level 3-1',
                    icon: 'icon-receipt',
                    type: 'dropdown',
                    children: [{
                        name: 'Level 4-1',
                        icon: 'icon-receipt',
                        type: 'link',
                        url: '/menu-levels/Item1-1-1-1'
                    },{
                        name: 'Level 4-2',
                        icon: 'icon-receipt',
                        type: 'link',
                        url: '/menu-levels/Item1-1-1-2'
                    },{
                        name: 'Level 4-3',
                        icon: 'icon-receipt',
                        type: 'link',
                        url: '/menu-levels/Item1-1-1-3'
                    }]
                }]
            }]
        }]
    });
});
