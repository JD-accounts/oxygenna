(function() {
    'use strict';

    angular
        .module('triangular.components')
        .directive('triMenu', triMenuDirective);

    /* @ngInject */
    function triMenuDirective($location, $mdTheming, triTheming) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            template: '<md-content><tri-menu-item ng-repeat="item in ::triMenuController.menu" item="::item"></tri-menu-item></md-content>',
            scope: {},
            controller: triMenuController,
            controllerAs: 'triMenuController',
            link: link,
        };
        return directive;

        function link($scope, $element, attrs) {
            $mdTheming($element);
            var $mdTheme = $element.controller('mdTheme');

            var menuColor = triTheming.getThemeHue($mdTheme.$mdTheme, 'primary', 'default');
            var menuColorRGBA = triTheming.rgba(menuColor.value);
            $element.css({ 'background-color': menuColorRGBA });
            $element.children('md-content').css({ 'background-color': menuColorRGBA });
        }
    }

    /* @ngInject */
    function triMenuController(triMenu, $scope) {
        var triMenuController = this;

        triMenuController.menu = triMenu.menu;
        triMenuController.toggleMenu = toggleMenu;

        function toggleMenu() {
            $scope.$broadcast('toggleMenu', this.item, !this.item.open);
        }
    }
})();
