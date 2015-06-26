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
controller('AdminController', function ($scope, $element, $timeout, $mdSidenav, $mdUtil, $state) {
    $scope.toolbarShrink = undefined;
    $scope.isMenuLocked = true; 
    $scope.isMenuCollapsing = false;   

    if($state.current.data !== undefined) {
        if($state.current.data.toolbar !== undefined) {
            if($state.current.data.toolbar.shrink === true) {
                $scope.toolbarShrink = true;
            }
        }
    }

    $scope.toggleMenuLock = function() {    	    	
    	$scope.isMenuLocked = !$scope.isMenuLocked;
    	$scope.isMenuCollapsing = !$scope.isMenuLocked;
    	
    	if($scope.isMenuCollapsing === true){    	
    		$timeout(function() {
    			$scope.isMenuCollapsing = false;    			
    		}, 2000);
    	}    	    
    };

    $scope.menuClass = function() {    	
    	return  $scope.isMenuLocked === true ? '' :($scope.isMenuCollapsing === true ? 'is-collapsing' :'admin-sidebar-collapsed');
    };
});