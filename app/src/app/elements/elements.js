'use strict';

/**
 * @ngdoc module
 * @name triAngularElements
 * @description
 *
 * The `triAngularElements` module adds the example elements pages & menus
 */
angular.module('triAngularElements', [])
.config(function ($translatePartialLoaderProvider, $stateProvider) {
    $translatePartialLoaderProvider.addPart('app/elements');

    $stateProvider
    .state('private.admin.toolbar.default.buttons', {
        url: '/elements/buttons',
        templateUrl: 'app/elements/buttons.tmpl.html',
        controller: 'ButtonsController'
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        type: 'divider',
        priority: 1,
    });
    SideMenu.addMenu({
        name: 'ELEMENTS.MENU.ELEMENTS',
        icon: 'icon-school',
        type: 'dropdown',
        priority: 1,
        children: [{
            name: 'ELEMENTS.MENU.BUTTONS',
            type: 'link',
            url: 'elements/buttons'
        }]
    });
});

