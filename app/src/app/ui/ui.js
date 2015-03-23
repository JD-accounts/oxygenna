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
    .state('private.admin.toolbar.default.skins', {
        url: '/ui/skins',
        controller: 'SkinsController',
        templateUrl: 'app/ui/skins.tmpl.html',
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'UI',
        icon: 'icon-straighten',
        type: 'dropdown',
        priority: 2,
        children: [{
            name: 'Skins',
            url: '/ui/skins',
            type: 'link',
        }]
    });
});
