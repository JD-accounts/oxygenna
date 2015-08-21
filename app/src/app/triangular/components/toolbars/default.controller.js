(function() {
    'use strict';

    angular
        .module('triangular.components')
        .controller('DefaultToolbarController', DefaultToolbarController);

    /* @ngInject */
    function DefaultToolbarController($scope, $mdMedia, $translate, $state, $element, $filter, $mdUtil, $mdSidenav, $mdToast, $timeout, triBreadcrumbs, triSettings, triLayout) {
        var vm = this;
        vm.breadcrumbs = triBreadcrumbs.breadcrumbs;
        vm.emailNew = false;
        vm.languages = triSettings.languages;
        vm.openSideNav = openSideNav;
        vm.hideMenuButton = hideMenuButton;
        vm.switchLanguage = switchLanguage;
        vm.toggleNotificationsTab = toggleNotificationsTab;

        // vm.toolbarTypeClass = function() {
        //     return $scope.extraClass;
        // }

        // $scope.$on('$stateChangeStart', initToolbar);

        // function initToolbar() {
        //     $element.css('background-image', '');

        //     if($state.current.data !== undefined) {
        //         if($state.current.data.toolbar !== undefined) {
        //             if($state.current.data.toolbar.extraClass !== false) {
        //                 $scope.extraClass = $state.current.data.toolbar.extraClass;
        //             }

        //             if($state.current.data.toolbar.background) {
        //                 $element.css('background-image', 'url(' + $state.current.data.toolbar.background + ')');
        //             }
        //         }
        //     }
        // }

        // initToolbar();

        ////////////////

        function openSideNav(navID) {
            $mdUtil.debounce(function(){
                $mdSidenav(navID).toggle();
            }, 300)();
        }

        function switchLanguage(languageCode) {
            $translate.use(languageCode)
            .then(function() {
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('MESSAGES.LANGUAGE_CHANGED'))
                    .position('bottom right')
                    .hideDelay(500)
                );
            });
        }

        function hideMenuButton() {
            return triLayout.layout.sideMenuSize !== 'hidden' && $mdMedia('gt-md');
        }

        function toggleNotificationsTab(tab) {
            $scope.$parent.$broadcast('triSwitchNotificationTab', tab);
            vm.openSideNav('notifications');
        }

        $scope.$on('newMailNotification', function(){
            vm.emailNew = true;
        });
    }
})();