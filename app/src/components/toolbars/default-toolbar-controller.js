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
.controller('DefaultToolbarController', function ($scope, $translate, $state, $element, $mdUtil, $mdSidenav, SideMenu, triTheme, APP) {
    $scope.appName = APP.name;
    $scope.menu = SideMenu.getMenu();
    $scope.triTheme = triTheme;

    $scope.$on('$stateChangeSuccess', function() {
        $element.removeClass('md-tall');
        $element.css('background-image', '');

        if($state.current.data !== undefined) {
            if($state.current.data.toolbar !== undefined) {
                if($state.current.data.toolbar.tall === true) {
                    $element.addClass('md-tall');
                }

                if($state.current.data.toolbar.background) {
                    $element.css('background-image', 'url(' + $state.current.data.toolbar.background + ')');
                }
            }
        }
    })

    $scope.switchLanguage = function(languageCode) {
        $translate.use(languageCode).then(function(data) {
        })
    };

    $scope.openSideNav = function(navID) {
        $mdUtil.debounce(function(){
            $mdSidenav(navID).toggle();
        }, 300)();
    };

    $scope.toggleNotificationsTab = function(tab) {
        $scope.$parent.$broadcast('triSwitchNotificationTab', tab);
        $scope.openSideNav('notifications');
    };
});