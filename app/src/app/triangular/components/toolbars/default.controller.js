(function() {
    'use strict';

    angular
        .module('triangular.components')
        .controller('DefaultToolbarController', DefaultToolbarController);

    /* @ngInject */
    function DefaultToolbarController($scope, $rootScope, $translate, $state, $element, $mdUtil, $mdSidenav, $timeout, triBreadcrumbs) {
        var vm = this;
        vm.breadcrumbs = triBreadcrumbs.breadcrumbs;

        $scope.toolbarTypeClass = function() {
            return $scope.extraClass;
        };

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
            $translate.use(languageCode).then(function() {
            });
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

        $scope.profile = function() {
            $state.go('admin-panel.default.profile');
        };

        $scope.logout = function() {
            $state.go('authentication.login');
        };

        $scope.$on('newMailNotification', function(){
            $scope.emailNew = true;
        });

        // until we can get languages from angular-translate use APP constant
        // $scope.languages = APP.languages;

        activate();

        ////////////////

        function activate() {
        }
    }
})();