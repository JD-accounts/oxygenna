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
    });    
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'MENU.EXTRAS.EXTRAS',
        icon: 'icon-place',
        type: 'dropdown',
        priority: 8.1,
        children: [{
            name: 'MENU.EXTRAS.GALLERY',
            url: '/gallery',
            type: 'link',
        }]
    });
});
