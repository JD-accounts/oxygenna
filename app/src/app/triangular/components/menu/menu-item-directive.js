(function() {
    'use strict';

    angular
        .module('triangular.components')
        .directive('triMenuItem', directive);

    /* @ngInject */
    function directive ($state) {
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
            replace: true,
            template: '<div ng-include="::triMenuItem.itemTemplate"></div>',
            link: link,
            controller: triMenuItemController,
            controllerAs: 'triMenuItem',
            bindToController: true
        };
        return directive;

        function link($scope, $element, attr, triMenuController) {

            /***
            * Menu Click Handlers
            ***/
            $scope.triMenuItem.toggleMenu = triMenuController.toggleMenu;
            // function() {
            //     console.log('click')
            //     // send message down the menu from the parent, item is toggled
            //     // this will close any sibling menus
            //     triMenuItem.$parent.$parent.$broadcast('toggleMenu', triMenuItem.item, !triMenuItem.item.open);
            // };
        }
    }


    function triMenuItemController($scope, $state) {
        var triMenuItem = this;

        // load a template for this directive based on the type ( link | dropdown )
        triMenuItem.itemTemplate = 'app/triangular/components/menu/menu-item-' + triMenuItem.item.type + '.tmpl.html';
        triMenuItem.item.url = $state.href(triMenuItem.item.state);

        // this event ensures that any sibling menu items are closed when menu item is opened
        $scope.$on('toggleMenu', function(event, item, open) {
            // if this is the item we are looking for
            if(triMenuItem.item === item) {
                triMenuItem.item.open = open;
            }
            else {
                triMenuItem.item.open = false;
            }
        });

        /***
        * URL Change Handlers
        ***/

        function isActive() {
            return $state.includes(triMenuItem.item.state);
        }

        // on first init check if we are the current menu item
        if(isActive()) {
            openMenu();
        }

        // opens the menu then calls its parents to also open
        function openMenu() {
            triMenuItem.item.active = true;
            triMenuItem.item.open = true;
            $scope.$emit('openParents');
        }

        // add a watch for when the url location changes
        $scope.$on('$locationChangeSuccess', function() {
            // location has changed so update the menu
            triMenuItem.item.active = false;
            triMenuItem.item.open = false;
            if(isActive()) {
                openMenu();
            }
        });

        // adds an extra hue class if the item is active
        triMenuItem.activeClass = function() {
            return isActive() ? 'md-hue-3' : '';
        };

        triMenuItem.openLink = function() {
            // if we dont have any default params for this state just use empty object
            var params = triMenuItem.item.params === undefined ? {} : triMenuItem.item.params;

            $state.go(triMenuItem.item.state, params);
        };

        // this event is emitted up the tree to open parent menus
        $scope.$on('openParents', function() {
            // openParents event so open the parent item
            triMenuItem.item.active = true;
            triMenuItem.item.open = true;
        });
    }
})();