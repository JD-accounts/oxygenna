(function() {
    'use strict';

    angular
        .module('triangular.components')
        .controller('MenuController', MenuController);

    /* @ngInject */
    function MenuController($scope, $timeout, $mdSidenav, triSettings) {
        var vm = this;
        vm.sidebarInfo = {
            appName: triSettings.name,
            appLogo: triSettings.logo
        };

        // add a watch for when the url location changes
        $scope.$on('$locationChangeSuccess', function() {
            // location has changed so close menu
            $timeout(function(){
                $mdSidenav('left').close();
            });
        });
    }
})();
