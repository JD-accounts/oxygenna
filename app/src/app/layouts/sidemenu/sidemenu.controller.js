(function() {
    'use strict';

    angular
        .module('triangular.components')
        .controller('SideMenuController', SideMenuController);

    /* @ngInject */
    function SideMenuController(triSettings, triLayout) {
        var vm = this;
        vm.layout = triLayout.layout;
        vm.sidebarInfo = {
            appName: triSettings.name,
            appLogo: triSettings.logo
        };
        vm.toggleIconMenu = toggleIconMenu;
        ////////////
        function toggleIconMenu() {
            var menu = vm.layout.sideMenuSize === 'icon' ? 'full' : 'icon';
            triLayout.setOption('sideMenuSize', menu);
        }
    }
})();
