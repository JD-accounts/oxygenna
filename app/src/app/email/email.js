'use strict';

/**
 * @ngdoc module
 * @name triAngularEmail
 * @description
 *
 * The `triangular.email` module adds email inbox pages
 */
angular.module('triAngularEmail', ['angularMoment', 'textAngular'])
.config(function ($translatePartialLoaderProvider, $stateProvider, $provide) {
    $translatePartialLoaderProvider.addPart('app/email');

    $stateProvider
    .state('private.admin.inbox', {
        url: '/inbox',
        templateUrl: 'app/email/inbox.tmpl.html',
        controller: 'InboxController',
        resolve: {
            emails: function($http, API_CONFIG) {
                return $http({
                    method: 'GET',
                    url: API_CONFIG.url + 'email/inbox',
                });
            }
        }
    })

    .state('private.admin.inbox.email', {
        url: '/mail/:emailID',
        templateUrl: 'app/email/email.tmpl.html',
        controller: 'EmailController',
        resolve: {
            email: function($stateParams, emails) {
                emails = emails.data;
                var foundEmail = false;
                for(var i = 0; i < emails.length; i++) {
                    if(emails[i].id === $stateParams.emailID) {
                        foundEmail = emails[i];
                        break;
                    }
                }
                return foundEmail;
            }
        },
        onEnter: function($state, email){
            if (false === email) {
                $state.go('private.admin.inbox');
            }
        },
    });


    /***
    * Setup Editor Toolbar here
    ***/
    $provide.decorator('taOptions', ['taRegisterTool', 'taTranslations', '$delegate', function(taRegisterTool, taTranslations, taOptions){
        taOptions.toolbar = [['bold', 'italics', 'underline', 'insertLink']];

        taOptions.classes = {
            focussed: 'focussed',
            toolbar: 'editor-toolbar',
            toolbarGroup: 'editor-group',
            toolbarButton: '',
            toolbarButtonActive: '',
            disabled: '',
            textEditor: 'form-control',
            htmlEditor: 'form-control'
        };
        return taOptions;
    }]);

    $provide.decorator('taTools', ['$delegate', function(taTools){
        taTools.bold.iconclass = 'icon-format-bold';
        taTools.italics.iconclass = 'icon-format-italic';
        taTools.underline.iconclass = 'icon-format-underline';
        taTools.insertLink.iconclass = 'icon-insert-link';
        return taTools;
    }]);

})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'Email',
        icon: 'icon-email',
        type: 'dropdown',
        priority: 1,
        children: [{
            name: 'Inbox',
            icon: 'icon-inbox',
            url: '/inbox',
            type: 'link',
        }]
    });
});

