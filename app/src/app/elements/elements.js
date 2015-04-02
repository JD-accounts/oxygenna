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
    })
    .state('private.admin.toolbar.default.icons', {
        url: '/elements/icons',
        templateUrl: 'app/elements/icons.tmpl.html',
        controller: 'IconsController',
        resolve: {
            icons: function($http, API_CONFIG) {
                return $http({
                    method: 'GET',
                    url: API_CONFIG.url + 'elements/icons',
                });
            }
        }
    })
    .state('private.admin.toolbar.default.checkboxes', {
        url: '/elements/checkboxes',
        templateUrl: 'app/elements/checkboxes.tmpl.html'
    })
    .state('private.admin.toolbar.default.radios', {
        url: '/elements/radios',
        templateUrl: 'app/elements/radios.tmpl.html'
    })
    .state('private.admin.toolbar.default.switches', {
        url: '/elements/switches',
        templateUrl: 'app/elements/switches.tmpl.html'
    })
    .state('private.admin.toolbar.default.cards', {
        url: '/elements/cards',
        templateUrl: 'app/elements/cards.tmpl.html'
    });

})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'ELEMENTS.MENU.ELEMENTS',
        icon: 'icon-school',
        type: 'dropdown',
        priority: 3.1,
        children: [{
            name: 'ELEMENTS.MENU.BUTTONS',
            type: 'link',
            url: 'elements/buttons'
        },{
            name: 'ELEMENTS.MENU.CARDS',
            type: 'link',
            url: 'elements/cards'
        },{
            name: 'ELEMENTS.MENU.CHECKBOXES',
            type: 'link',
            url: 'elements/checkboxes'
        },{
            name: 'ELEMENTS.MENU.ICONS',
            type: 'link',
            url: 'elements/icons'
        },{
            name: 'ELEMENTS.MENU.RADIOS',
            type: 'link',
            url: 'elements/radios'
        },{
            name: 'ELEMENTS.MENU.SWITCHES',
            type: 'link',
            url: 'elements/switchs'
        }]
    });
});

