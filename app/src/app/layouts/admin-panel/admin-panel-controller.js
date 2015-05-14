'use strict';

/**
 * @ngdoc function
 * @name AdminController
 * @module triAngular
 * @kind function
 *
 * @description
 *
 * Handles the admin view
 */
angular.module('triAngular').
controller('AdminController', function ($scope, $element, $timeout, $mdSidenav, $mdUtil, $state, triTheme, APP) {
    $scope.appName = APP.name;
    $scope.triTheme = triTheme;
    $scope.toolbarShrink = false;

    $scope.$on('$stateChangeSuccess', function() {
        $scope.toolbarShrink = false;
        // set content padding class
        if($state.current.data !== undefined) {
            if($state.current.data.content !== undefined) {
                if($state.current.data.content.paddingClass !== undefined) {
                    $scope.contentPadingClass = $state.current.data.content.paddingClass;
                }
            }

            if($state.current.data.toolbar !== undefined) {
                if($state.current.data.toolbar.shrink === true) {
                    $scope.toolbarShrink = true;
                }
            }
        }
    });

    $scope.toggleNotificationsTab = function(tab) {
        $scope.$broadcast('triSwitchNotificationTab', tab);
        $scope.openSideNav('notifications');
    };

    // add a watch for when the url location changes
    $scope.$on('$locationChangeSuccess', function() {
        // location has changed so update menu
        $timeout(function() { $mdSidenav('left').close(); });
    });

    /**
     * Build handler to open/close a SideNav;
     */
    $scope.openSideNav = function(navID) {
        $mdUtil.debounce(function(){
            $mdSidenav(navID).toggle();
        }, 300)();
    };
});