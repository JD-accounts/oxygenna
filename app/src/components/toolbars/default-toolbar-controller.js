'use strict';

/**
 * @ngdoc function
 * @name EmailToolbarController
 * @module triAngularEmail
 * @kind function
 *
 * @description
 *
 * Handles all actions for email toolbar
 */

angular.module('triAngular')
.controller('DefaultToolbarController', function ($scope, $translate, $state, $element, SideMenu, triTheme, APP) {
    $scope.appName = APP.name;
    $scope.menu = SideMenu.getMenu();
    $scope.triTheme = triTheme;

    if($state.current.data !== undefined) {
        if($state.current.data.toolbar !== undefined) {
            if($state.current.data.toolbar.tall === true) {
                $element.addClass('md-tall');
            }
        }
    }

    $scope.switchLanguage = function(languageCode) {
        $translate.use(languageCode).then(function(data) {
        })
    };
});