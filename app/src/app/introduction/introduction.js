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
    .state('private.admin.toolbar.default.introduction', {
        url: '/introduction',
        templateUrl: 'app/introduction/introduction.tmpl.html',
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'Introduction',
        url: '/introduction',
        type: 'link',
        icon: 'icon-info-outline',
        priority: 0
    });
});
