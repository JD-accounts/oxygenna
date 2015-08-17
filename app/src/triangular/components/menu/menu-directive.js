(function() {
    'use strict';

    angular
        .module('triangular.components')
        .directive('triMenu', triMenu);

    /* @ngInject */
    function triMenu($location, $mdTheming, triTheming, triMenu) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            template: '<md-content><side-menu-item ng-repeat="item in ::menu | orderBy:\'priority\'" item="::item"></side-menu-item></md-content>',
            scope: {},
            controller: triMenuController,
            link: link,
        };
        return directive;

        function link($scope, $element, attrs) {
            $mdTheming($element);
            var $mdTheme = $element.controller('mdTheme');

            attrs.$observe('mdTheme', function() {
                var menuColor = triTheming.getThemeHue($mdTheme.$mdTheme, 'primary', 'default');
                var menuColorRGBA = triTheming.rgba(menuColor.value);
                $element.css({ 'background-color': menuColorRGBA });
                $element.children('md-content').css({ 'background-color': menuColorRGBA });
            });
        }
    }

    /* @ngInject */
    function triMenuController($scope) {
        // $scope.menu = SideMenu.getMenu();
    }
})();
