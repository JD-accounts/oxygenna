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
    .state('admin.toolbar.default.gallery', {
        url: '/gallery',
        templateUrl: 'app/extras/gallery.tmpl.html',
        controller: 'GalleryController'
    })
    .state('admin.toolbar.default.avatars', {
        url: '/avatars',
        templateUrl: 'app/extras/avatars.tmpl.html'        
    });    
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
        }]
    });
});
