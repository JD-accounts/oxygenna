'use strict';

/**
 * @ngdoc module
 * @name triAngularUI
 * @description
 *
 * The `triAngularUI` module adds an UI pages
 */
angular.module('triAngularUI', [])
.config(function ($translatePartialLoaderProvider, $stateProvider) {
    $translatePartialLoaderProvider.addPart('app/ui');

    $stateProvider
    .state('private.admin.skins', {
        url: '/ui/skins',
        controller: 'SkinsController',
        templateUrl: 'app/ui/skins.tmpl.html',
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'Menu Levels',
        icon: 'icon-receipt',
        type: 'dropdown',
        priority: 2,
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
                },{
                    name: 'Level 4-2',
                    icon: 'icon-receipt',
                    type: 'link',
                },{
                    name: 'Level 4-3',
                    icon: 'icon-receipt',
                    type: 'link',
                }]
            },{
                name: 'Level 3-2',
                icon: 'icon-receipt',
                type: 'dropdown',
                children: [{
                    name: 'Level 4-1',
                    icon: 'icon-receipt',
                    type: 'link',
                },{
                    name: 'Level 4-2',
                    icon: 'icon-receipt',
                    type: 'link',
                },{
                    name: 'Level 4-3',
                    icon: 'icon-receipt',
                    type: 'link',
                }]
            }]
        },{
            name: 'Level 2-2',
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
                },{
                    name: 'Level 4-2',
                    icon: 'icon-receipt',
                    type: 'link',
                },{
                    name: 'Level 4-3',
                    icon: 'icon-receipt',
                    type: 'link',
                }]
            },{
                name: 'Level 3-2',
                icon: 'icon-receipt',
                type: 'dropdown',
                children: [{
                    name: 'Level 4-1',
                    icon: 'icon-receipt',
                    type: 'link',
                },{
                    name: 'Level 4-2',
                    icon: 'icon-receipt',
                    type: 'link',
                },{
                    name: 'Level 4-3',
                    icon: 'icon-receipt',
                    type: 'link',
                }]
            }]
        }]
    });
});
