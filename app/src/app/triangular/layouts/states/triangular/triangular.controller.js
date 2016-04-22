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
(function() {
    'use strict';

    angular
        .module('triangular.layouts')
        .controller('TriangularStateController', TriangularStateController);

    /* @ngInject */
    function TriangularStateController($scope, $rootScope, $element, $timeout, $window, triLayout, triLoaderService) {
        // we need to use the scope here because otherwise the expression in md-is-locked-open doesnt work
        $scope.layout = triLayout.layout; //eslint-disable-line
        var vm = this;

        vm.activateHover = activateHover;
        vm.removeHover  = removeHover;
        vm.showLoader = triLoaderService.isActive();

        ////////////////

        function activateHover() {
            if(triLayout.layout.sideMenuSize === 'icon') {
                $element.find('.admin-sidebar-left').addClass('hover');
                $timeout(function(){
                    $window.dispatchEvent(new Event('resize'));
                },300);
            }
        }

        function removeHover () {
            if(triLayout.layout.sideMenuSize === 'icon') {
                $element.find('.admin-sidebar-left').removeClass('hover');
                $timeout(function(){
                    $window.dispatchEvent(new Event('resize'));
                },300);
            }
        }

        // register listeners for loader
        $scope.$on('loader', function(event, isActive) {
            vm.showLoader = isActive;
        });

        $scope.$on('$stateChangeStart', function() {
            triLoaderService.setLoaderActive(true);
        });

        $scope.$on('$viewContentLoaded', function() {
            $timeout(function() {
                triLoaderService.setLoaderActive(false);
            });
        });
    }
})();
