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
    .state('admin.toolbar.default.buttons', {
        url: '/elements/buttons',
        templateUrl: 'app/elements/buttons.tmpl.html',
        controller: 'ButtonsController'
    })
    .state('admin.toolbar.default.icons', {
        url: '/elements/icons',
        templateUrl: 'app/elements/icons.tmpl.html',
        controller: 'IconsController',
        resolve: {
            icons: function($http, API_CONFIG) {
                return $http({
                    method: 'GET',
                    url: API_CONFIG.url + 'elements/icons',
                });
            },
            fa: function($http, API_CONFIG) {
                return $http({
                    method: 'GET',
                    url: API_CONFIG.url + 'elements/icons-fa',
                });
            }
        }
    })
    .state('admin.toolbar.default.checkboxes', {
        url: '/elements/checkboxes',
        templateUrl: 'app/elements/checkboxes.tmpl.html'
    })
    .state('admin.toolbar.default.radios', {
        url: '/elements/radios',
        templateUrl: 'app/elements/radios.tmpl.html'
    })
    .state('admin.toolbar.default.toolbars', {
        url: '/elements/toolbars',
        templateUrl: 'app/elements/toolbars.tmpl.html'
    })
    .state('admin.toolbar.default.tooltips', {
        url: '/elements/tooltips',
        templateUrl: 'app/elements/tooltips.tmpl.html'
    })
    .state('admin.toolbar.default.whiteframes', {
        url: '/elements/whiteframes',
        templateUrl: 'app/elements/whiteframes.tmpl.html'
    })
    .state('admin.toolbar.default.sliders', {
        url: '/elements/sliders',
        templateUrl: 'app/elements/sliders.tmpl.html'
    })
    .state('admin.toolbar.default.toasts', {
        url: '/elements/toasts',
        templateUrl: 'app/elements/toasts.tmpl.html',
        controller: 'ToastsController'
    })
    .state('admin.toolbar.default.progress', {
        url: '/elements/progress',
        templateUrl: 'app/elements/progress.tmpl.html',
        controller: 'ProgressController'
    })
    .state('admin.toolbar.default.switches', {
        url: '/elements/switches',
        templateUrl: 'app/elements/switches.tmpl.html',
        controller: 'SwitchesController'
    })
    .state('admin.toolbar.default.dialogs', {
        url: '/elements/dialogs',
        templateUrl: 'app/elements/dialogs.tmpl.html',
        controller: 'DialogsController'
    })
    .state('admin.toolbar.default.tabs', {
        url: '/elements/tabs',
        templateUrl: 'app/elements/tabs.tmpl.html',
        controller: 'TabsController'
    })
    .state('admin.toolbar.default.sidebars', {
        url: '/elements/sidebars',
        templateUrl: 'app/elements/sidebars.tmpl.html',
        controller: 'SidebarsController'
    })
    .state('admin.toolbar.default.grids', {
        url: '/elements/grids',
        templateUrl: 'app/elements/grids.tmpl.html',
        controller: 'GridsController'
    })
    .state('admin.toolbar.default.selects', {
        url: '/elements/selects',
        templateUrl: 'app/elements/selects.tmpl.html'
    })
    .state('admin.toolbar.default.lists', {
        url: '/elements/lists',
        templateUrl: 'app/elements/lists.tmpl.html',
        controller: 'ListsController',
        resolve: {
            emails: function($http, API_CONFIG) {
                return $http({
                    method: 'GET',
                    url: API_CONFIG.url + 'email/inbox',
                });
            },
        }
    })
    .state('admin.toolbar.default.chips', {
        url: '/elements/chips',
        templateUrl: 'app/elements/chips.tmpl.html',
        controller: 'ChipsController',
        resolve: {
            contacts: function($http, API_CONFIG) {
                return $http({
                    method: 'GET',
                    url: API_CONFIG.url + 'email/contacts',
                });
            }
        }
    })
    .state('admin.toolbar.default.cards', {
        url: '/elements/cards',
        templateUrl: 'app/elements/cards.tmpl.html'
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'MENU.ELEMENTS.ELEMENTS',
        icon: 'icon-school',
        type: 'dropdown',
        priority: 3.1,
        children: [{
            name: 'MENU.ELEMENTS.BUTTONS',
            type: 'link',
            url: 'elements/buttons'
        },{
            name: 'MENU.ELEMENTS.CARDS',
            type: 'link',
            url: 'elements/cards'
        },{
            name: 'MENU.ELEMENTS.CHECKBOXES',
            type: 'link',
            url: 'elements/checkboxes'
        },{
            name: 'MENU.ELEMENTS.CHIPS',
            type: 'link',
            url: 'elements/chips'
        },{
            name: 'MENU.ELEMENTS.DIALOGS',
            type: 'link',
            url: 'elements/dialogs'
        },{
            name: 'MENU.ELEMENTS.GRIDS',
            type: 'link',
            url: 'elements/grids'
        },{
            name: 'MENU.ELEMENTS.ICONS',
            type: 'link',
            url: 'elements/icons'
        },{
            name: 'MENU.ELEMENTS.LISTS',
            type: 'link',
            url: 'elements/lists'
        },{
            name: 'MENU.ELEMENTS.PROGRESS',
            type: 'link',
            url: 'elements/progress'
        },{
            name: 'MENU.ELEMENTS.RADIOS',
            type: 'link',
            url: 'elements/radios'
        },{
            name: 'MENU.ELEMENTS.SELECTS',
            type: 'link',
            url: 'elements/selects'
        },{
            name: 'MENU.ELEMENTS.SIDEBARS',
            type: 'link',
            url: 'elements/sidebars'
        },{
            name: 'MENU.ELEMENTS.SLIDERS',
            type: 'link',
            url: 'elements/sliders'
        },{
            name: 'MENU.ELEMENTS.SWITCHES',
            type: 'link',
            url: 'elements/switches'
        },{
            name: 'MENU.ELEMENTS.TABS',
            type: 'link',
            url: 'elements/tabs'
        },{
            name: 'MENU.ELEMENTS.TOASTS',
            type: 'link',
            url: 'elements/toasts'
        },{
            name: 'MENU.ELEMENTS.TOOLBARS',
            type: 'link',
            url: 'elements/toolbars'
        },{
            name: 'MENU.ELEMENTS.TOOLTIPS',
            type: 'link',
            url: 'elements/tooltips'
        },{
            name: 'MENU.ELEMENTS.WHITEFRAMES',
            type: 'link',
            url: 'elements/whiteframes'
        }]
    });
});

