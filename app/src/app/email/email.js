'use strict';

/**
 * @ngdoc module
 * @name triAngularEmail
 * @description
 *
 * The `triangular.email` module adds email inbox pages
 */
angular.module('triAngularEmail', ['angularMoment', 'textAngular'])
.constant('EMAIL_ROUTES', [{
    state: 'inbox',
    name: 'EMAIL.MENU.INBOX',
    url: '/inbox',
    icon: 'icon-inbox'
},{
    state: 'trash',
    name: 'EMAIL.MENU.TRASH',
    url: '/trash',
    icon: 'icon-remove-circle'
},{
    state: 'sent',
    name: 'EMAIL.MENU.SENT',
    url: '/sent',
    icon: 'icon-mail'
}])
.config(function ($translatePartialLoaderProvider, $stateProvider, $provide, EMAIL_ROUTES) {
    $translatePartialLoaderProvider.addPart('app/email');

    angular.forEach(EMAIL_ROUTES, function(route) {
        $stateProvider
        .state('private.admin.toolbar.' + route.state, {
            url: route.url,
            views: {
                toolbar: {
                    templateUrl: 'app/email/toolbar.tmpl.html',
                    controller: 'EmailToolbarController'
                },
                content: {
                    templateUrl: 'app/email/inbox.tmpl.html',
                    controller: 'InboxController',
                }
            },
            resolve: {
                emails: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'email/inbox',
                    });
                },
                contacts: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'email/contacts',
                    });
                }
            }
        });
    });

    angular.forEach(EMAIL_ROUTES, function(route) {
        $stateProvider
        .state('private.admin.toolbar.' + route.state + '.email', {
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
                },
                contacts: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'email/contacts',
                    });
                }
            },
            onEnter: function($state, email){
                if (false === email) {
                    $state.go('private.admin.toolbar.' + route.state);
                }
            },
        });
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
.run(function(SideMenu, $translate, EMAIL_ROUTES) {
    var emailMenu = {
        name: 'EMAIL.MENU.EMAIL',
        icon: 'icon-email',
        type: 'dropdown',
        priority: 2.2,
        children: []
    };

    angular.forEach(EMAIL_ROUTES, function(route) {
        emailMenu.children.push({
            name: route.name,
            url: route.url,
            type: 'link',
        });
    });

    SideMenu.addMenu(emailMenu);

    SideMenu.addMenu({
        type: 'divider',
        priority: 2.3
    });

});

