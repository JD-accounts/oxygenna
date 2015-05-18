'use strict';

/**
 * @ngdoc module
 * @name triangular.authentication
 * @description
 *
 * The `triangular.extras` module handles all the extra pages
 */
angular.module('triAngularExtras', [])
.config(function ($translatePartialLoaderProvider, $stateProvider) {
    $translatePartialLoaderProvider.addPart('app/extras');

    $stateProvider
    .state('admin-panel.default.gallery', {
        url: '/gallery',
        templateUrl: 'app/extras/gallery.tmpl.html',
        controller: 'GalleryController'
    })
    .state('admin-panel.default.avatars', {
        url: '/avatars',
        templateUrl: 'app/extras/avatars.tmpl.html'
    })
    .state('not-found', {
        url: '/404',
        templateUrl: 'app/extras/404.tmpl.html',
        controller: 'NotFoundController'
    })
    .state('admin-panel.default.blank', {
        url: '/blank'        
    })
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'MENU.EXTRAS.EXTRAS',
        icon: 'icon-list',
        type: 'dropdown',
        priority: 8.1,
        children: [{
            name: 'MENU.EXTRAS.GALLERY',
            url: '/gallery',
            type: 'link',
        },{
            name: 'MENU.EXTRAS.AVATARS',
            url: '/avatars',
            type: 'link',
        },
        {
            name: 'MENU.EXTRAS.404.TITLE',
            url: '/404',
            type: 'link',
        },
        {
            name: 'MENU.EXTRAS.BLANK',
            url: '/blank',
            type: 'link',
        }]
    });
});
