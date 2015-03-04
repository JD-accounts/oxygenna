'use strict';

/**
 * @ngdoc module
 * @name triangular.introduction
 * @description
 *
 * The `triangular.introduction` module adds an introduction page
 */
angular.module('triAngularIntroduction', [])
.config(function ($translatePartialLoaderProvider, $stateProvider) {
    $translatePartialLoaderProvider.addPart('app/introduction');

    $stateProvider
    .state('private.admin.introduction', {
        url: '/introduction',
        controller: 'IntroductionController',
        templateUrl: 'app/introduction/introduction.tmpl.html',
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'Introduction',
        icon: 'icon-info-outline',
        url: '/introduction',
        type: 'link',
        priority: 0
    });
});
