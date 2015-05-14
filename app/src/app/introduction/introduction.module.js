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
    .state('admin-panel.default.introduction', {
        url: '/introduction',
        templateUrl: 'app/introduction/introduction.tmpl.html',
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'MENU.INTRODUCTION.INTRODUCTION',
        url: '/introduction',
        type: 'link',
        icon: 'icon-info-outline',
        priority: 1.1
    });
    SideMenu.addMenu({
        type: 'divider',
        priority: 1.2
    });
});
