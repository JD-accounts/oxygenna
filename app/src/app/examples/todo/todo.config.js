(function() {
    'use strict';

    angular
        .module('app.examples.todo')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/examples/todo');

        $stateProvider
        .state('todo-panel', {
            abstract: true,
            templateUrl: 'app/todo/layouts/todo-panel.tmpl.html',
            data: {
                toolbar: {
                    extraClass: '',
                    background: false,
                    shrink: true
                },
            }
        })
        .state('todo-panel.default', {
            abstract: true,
            views: {
                sidebarLeft: {
                    templateUrl: 'components/sidebar-left/sidebar-left.tmpl.html',
                    controller: 'SidebarLeftController'
                },
                sidebarRight: {
                    templateUrl: 'components/sidebar-right/sidebar-right.tmpl.html',
                    controller: 'SidebarRightController'
                },
                toolbar: {
                    templateUrl: 'components/toolbars/default.tmpl.html',
                    controller: 'DefaultToolbarController'
                },
                content: {
                    template: '<div id="admin-panel-content-view" flex ui-view></div>'
                }
            },
        })
        .state('todo-panel.default.todo', {
            url: '/todo',
            templateUrl: 'app/todo/todo.tmpl.html',
            controller: 'TodoController'
        });

        triMenuProvider.addMenu({
            name: 'MENU.TODO.TITLE',
            icon: 'icon-done',
            state: 'todo-panel.default.todo',
            type: 'link',
            priority: 2.4,
        });
    }
})();