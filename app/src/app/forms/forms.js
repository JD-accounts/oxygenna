'use strict';

/**
 * @ngdoc module
 * @name triAngularForms
 * @description
 *
 * The `triAngularForms` module adds the example form pages & menus
 */
angular.module('triAngularForms', [])
.config(function ($translatePartialLoaderProvider, $stateProvider) {
    $translatePartialLoaderProvider.addPart('app/forms');

    $stateProvider
    .state('private.admin.toolbar.default.forms', {
        url: '/forms/inputs',
        templateUrl: 'app/forms/inputs.tmpl.html'
    })
    .state('private.admin.toolbar.default.binding', {
        url: '/forms/binding',
        templateUrl: 'app/forms/binding.tmpl.html',
        controller: 'BindingController'
    })
    .state('private.admin.toolbar.default.autocomplete', {
        url: '/forms/autocomplete',
        templateUrl: 'app/forms/autocomplete.tmpl.html',
        controller: 'AutocompleteController',
        controllerAs: 'ctrl',
    })
    .state('private.admin.toolbar.default.validation', {
        url: '/forms/validation',
        templateUrl: 'app/forms/validation.tmpl.html'
    });

})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'FORMS.MENU.FORMS',
        icon: 'icon-event-available',
        type: 'dropdown',
        priority: 3.3,
        children: [{
            name: 'FORMS.MENU.AUTOCOMPLETE',
            type: 'link',
            url: 'forms/autocomplete'
        },{
            name: 'FORMS.MENU.BINDING',
            type: 'link',
            url: 'forms/binding'
        },{
            name: 'FORMS.MENU.INPUTS',
            type: 'link',
            url: 'forms/inputs'
        },{
            name: 'FORMS.MENU.VALIDATION',
            type: 'link',
            url: 'forms/validation'
        }]
    });
    SideMenu.addMenu({
        type: 'divider',
        priority: 3.4
    });
});

