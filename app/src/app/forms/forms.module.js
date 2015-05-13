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
    .state('admin.toolbar.default.forms', {
        url: '/forms/inputs',
        templateUrl: 'app/forms/inputs.tmpl.html'
    })
    .state('admin.toolbar.default.binding', {
        url: '/forms/binding',
        templateUrl: 'app/forms/binding.tmpl.html',
        controller: 'BindingController'
    })
    .state('admin.toolbar.default.autocomplete', {
        url: '/forms/autocomplete',
        templateUrl: 'app/forms/autocomplete.tmpl.html',
        controller: 'AutocompleteController',
        controllerAs: 'ctrl',
    })
    .state('admin.toolbar.default.validation', {
        url: '/forms/validation',
        templateUrl: 'app/forms/validation.tmpl.html'
    });

})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'MENU.FORMS.FORMS',
        icon: 'icon-event-available',
        type: 'dropdown',
        priority: 3.3,
        children: [{
            name: 'MENU.FORMS.AUTOCOMPLETE',
            type: 'link',
            url: 'forms/autocomplete'
        },{
            name: 'MENU.FORMS.BINDING',
            type: 'link',
            url: 'forms/binding'
        },{
            name: 'MENU.FORMS.INPUTS',
            type: 'link',
            url: 'forms/inputs'
        },{
            name: 'MENU.FORMS.VALIDATION',
            type: 'link',
            url: 'forms/validation'
        }]
    });
    SideMenu.addMenu({
        type: 'divider',
        priority: 3.4
    });
});

