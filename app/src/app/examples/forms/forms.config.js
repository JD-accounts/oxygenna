(function() {
    'use strict';

    angular
        .module('app.examples.authentication')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/examples/forms');

        $stateProvider
        .state('admin-panel.default.forms-inputs', {
            url: '/forms/inputs',
            templateUrl: 'app/forms/inputs.tmpl.html'
        })
        .state('admin-panel.default.forms-binding', {
            url: '/forms/binding',
            templateUrl: 'app/forms/binding.tmpl.html',
        })
        .state('admin-panel.default.forms-autocomplete', {
            url: '/forms/autocomplete',
            templateUrl: 'app/forms/autocomplete.tmpl.html'
        })
        .state('admin-panel.default.forms-wizard', {
            url: '/forms/wizard',
            templateUrl: 'app/forms/wizard.tmpl.html',
            controller: 'FormWizardController',
            controllerAs: 'wizardController'
        })
        .state('admin-panel.default.forms-validation', {
            url: '/forms/validation',
            templateUrl: 'app/forms/validation.tmpl.html'
        });

        triMenuProvider.addMenu({
            name: 'MENU.FORMS.FORMS',
            icon: 'icon-event-available',
            type: 'dropdown',
            priority: 3.3,
            children: [{
                name: 'MENU.FORMS.AUTOCOMPLETE',
                type: 'link',
                state: 'admin-panel.default.forms-autocomplete'
            },{
                name: 'MENU.FORMS.BINDING',
                type: 'link',
                state: 'admin-panel.default.forms-binding'
            },{
                name: 'MENU.FORMS.INPUTS',
                type: 'link',
                state: 'admin-panel.default.forms-inputs'
            },{
                name: 'MENU.FORMS.WIZARD',
                type: 'link',
                state: 'admin-panel.default.forms-wizard'
            },{
                name: 'MENU.FORMS.VALIDATION',
                type: 'link',
                state: 'admin-panel.default.forms-validation'
            }]
        });
        triMenuProvider.addMenu({
            type: 'divider',
            priority: 3.4
        });
    }
})();