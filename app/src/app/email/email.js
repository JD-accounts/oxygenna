'use strict';

/**
 * @ngdoc module
 * @name triAngularEmail
 * @description
 *
 * The `triangular.email` module adds email inbox pages
 */
angular.module('triAngularEmail', ['angularMoment'])
.config(function ($translatePartialLoaderProvider, $stateProvider) {
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
        }
    });

});
