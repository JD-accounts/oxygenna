(function() {
    'use strict';

    angular
        .module('triangular.components')
        .directive('triLoader', TriLoader);

    /* @ngInject */
    function TriLoader ($rootScope) {
        var directive = {
            bindToController: true,
            controller: TriLoaderController,
            controllerAs: 'vm',
            template: '<md-content flex class="loader" ng-show="vm.status.active" layout="column" layout-fill layout-align="center center"><div class="loader-inner"><md-progress-circular md-mode="indeterminate"></md-progress-circular></div><h3 class="md-headline">{{vm.appName}}</h3></md-content>',
            link: link,
            restrict: 'E',
            replace: true,
            scope: {
            }
        };
        return directive;

        function link($scope) {
            $rootScope.$on('$viewContentLoading', function() {
                $scope.vm.setLoaderActive(true);
            });

            $rootScope.$on('$viewContentLoaded', function() {
                $scope.vm.setLoaderActive(false);
            });
        }
    }

    /* @ngInject */
    function TriLoaderController ($rootScope, triLoader, triSettings) {
        var vm = this;
        vm.appName         = triSettings.name;
        vm.status          = triLoader.status;
        vm.setLoaderActive = triLoader.setLoaderActive;
    }
})();