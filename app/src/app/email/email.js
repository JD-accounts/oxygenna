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
        templateUrl: 'app/email/inbox.html',
        controller: 'InboxController',
        resolve: {
            emails: function($http, API_CONFIG) {
                return $http({
                    method: 'GET',
                    url: API_CONFIG.url + 'email/inbox',
                });
            }
        }
    });
});
