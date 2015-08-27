(function() {
    'use strict';

    angular
        .module('triangular.components')
        .controller('MenuController', MenuController);

    /* @ngInject */
    function MenuController($scope, $timeout, $mdSidenav, triSettings, triLayout) {
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

        // add a watch for when the url location changes
        $scope.$on('$locationChangeSuccess', function() {
            // location has changed so close menu
            $timeout(function(){
                $mdSidenav('left').close();
            });
        });
    }
})();
