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
        .controller('AdminController', AdminController);

    /* @ngInject */
    function AdminController($element, $timeout, $mdSidenav, $mdUtil, $state) {
        var vm = this;
        vm.activateHover = activateHover;

        vm.isMenuLocked = true;
        vm.isMenuCollapsing = false;
        vm.isHovering = false;
        vm.menuClass = menuClass;
        vm.toggleMenuLock = toggleMenuLock;
        vm.toolbarShrink = undefined;
        vm.removeHover  = removeHover;

        ////////////////

        // we need different event handlers for mouse over / leave, can not toggle the variable.
        function activateHover() {
            vm.isHovering = true;
        }

        function removeHover () {
            vm.isHovering = false;
        }

        function toggleMenuLock() {
            vm.isMenuLocked = !vm.isMenuLocked;
            vm.isMenuCollapsing = !vm.isMenuLocked;

            if(vm.isMenuCollapsing === true) {
                // manually remove the hover class in order to prevent the menu from growing back
                vm.isHovering = false;
                $timeout(function() {
                    vm.isMenuCollapsing = false;
                }, 400);
            }
        }

        function menuClass() {
            return  vm.isMenuLocked === true ? '' :(vm.isMenuCollapsing === true ? 'is-collapsing' : (vm.isHovering === true ? 'admin-sidebar-collapsed hover': 'admin-sidebar-collapsed' ));
        }
    }
})();