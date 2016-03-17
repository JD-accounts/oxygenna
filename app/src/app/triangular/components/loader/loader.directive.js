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
            template: '<div flex class="loader padding-100" ng-show="vm.status.active" layout="column" layout-fill layout-align="center center"><h3 class="md-headline">{{vm.triSettings.name}}</h3><md-progress-linear md-mode="indeterminate"></md-progress-linear></div>',
            link: link,
            restrict: 'E',
            replace: true,
            scope: {
            }
        };
        return directive;

        function link($scope) {
            var loadingListener = $rootScope.$on('$stateChangeStart', function() {
                $scope.vm.setLoaderActive(true);
                console.log('turn on');
            });

            var loadedListener = $rootScope.$on('$viewContentLoaded', function() {
                $scope.vm.setLoaderActive(false);
                console.log('turn off');
            });

            $scope.$on('$destroy', removeListeners);

            function removeListeners() {
                loadingListener();
                loadedListener();
            }
        }
    }

    /* @ngInject */
    function TriLoaderController ($rootScope, triLoaderService, triSettings) {
        var vm = this;
        vm.triSettings     = triSettings;
        vm.status          = triLoaderService.status;
        vm.setLoaderActive = triLoaderService.setLoaderActive;
        console.log('loader', vm);
    }
})();
