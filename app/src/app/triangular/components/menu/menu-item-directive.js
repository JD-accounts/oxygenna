(function() {
    'use strict';

    angular
        .module('triangular.components')
        .directive('triMenuItem', triMenuItemDirective);

    /* @ngInject */
    function triMenuItemDirective() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            require: '^triMenu',
            scope: {
                item: '='
            },
            // replace: true,
            template: '<div ng-include="::triMenuItem.item.template"></div>',
            link: link,
            controller: triMenuItemController,
            controllerAs: 'triMenuItem',
            bindToController: true
        };
        return directive;

        function link($scope, $element, attr, triMenuController) {
            // give menu item access to main triMenuController
            $scope.triMenuItem.openLink = triMenuController.openLink;
        }
    }


    function triMenuItemController($scope, $state, $filter) {
        var triMenuItem = this;

        // load a template for this directive based on the type ( link | dropdown )
        triMenuItem.item.template = 'app/triangular/components/menu/menu-item-' + triMenuItem.item.type + '.tmpl.html';

        switch(triMenuItem.item.type) {
            case 'dropdown':
                // if we have kids reorder them by priority
                triMenuItem.item.children = $filter('orderBy')(triMenuItem.item.children, 'priority');
                triMenuItem.toggleDropdownMenu = toggleDropdownMenu;
                // add a check for open event
                $scope.$on('toggleDropdownMenu', function(event, item, open) {
                    // if this is the item we are looking for
                    if(triMenuItem.item === item) {
                        triMenuItem.item.open = open;
                    }
                    else {
                        triMenuItem.item.open = false;
                    }
                });
                // this event is emitted up the tree to open parent menus
                $scope.$on('openParents', function() {
                    // openParents event so open the parent item
                    triMenuItem.item.open = true;
                });
            break;
            case 'link':
                // on init check if this is current menu
                if(triMenuItem.item.state === $state.current.name) {
                    // this is the current menu so activate it and open parent menus
                    triMenuItem.item.active = true;
                    $scope.$emit('openParents');
                }

                $scope.$on('openLink', function(event, state) {
                    // if this is the item we are looking for
                    triMenuItem.item.active = triMenuItem.item.state === state;
                    if(triMenuItem.item.active) {
                        $scope.$emit('openParents');
                    }
                });

                $scope.$on('$stateChangeSuccess', function(event, toState) {
                    triMenuItem.item.active = triMenuItem.item.state === toState.name;
                    if(triMenuItem.item.active) {
                        $scope.$emit('openParents');
                    }
                });
            break;

            function toggleDropdownMenu() {
                $scope.$parent.$parent.$broadcast('toggleDropdownMenu', triMenuItem.item, !triMenuItem.item.open);
            }
        }
    }
})();