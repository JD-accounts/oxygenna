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

    $scope.toolbarTypeClass = function() {
        return $scope.extraClass;
    }

    $scope.$on('$stateChangeStart', initToolbar);

    function initToolbar() {
        $element.css('background-image', '');

        if($state.current.data !== undefined) {
            if($state.current.data.toolbar !== undefined) {
                if($state.current.data.toolbar.extraClass !== false) {
                    $scope.extraClass = $state.current.data.toolbar.extraClass;
                }

                if($state.current.data.toolbar.background) {
                    $element.css('background-image', 'url(' + $state.current.data.toolbar.background + ')');
                }
            }
        }
    }

    initToolbar();

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