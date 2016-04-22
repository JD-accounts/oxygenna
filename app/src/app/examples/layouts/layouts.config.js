(function() {
    'use strict';

    angular
        .module('app.examples.layouts')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.standard-page',  {
            url: '/layouts/standard-page',
            templateUrl: 'app/examples/layouts/standard-page.tmpl.html',
        })
        .state('triangular.no-scroll-page',  {
            url: '/layouts/no-scroll-page',
            templateUrl: 'app/examples/layouts/no-scroll-page.tmpl.html',
            data: {
                layout: {
                    contentClass: 'triangular-non-scrolling'
                }
            }
        })
        .state('triangular.layouts-composer', {
            url: '/layouts/composer',
            templateUrl: 'app/examples/layouts/composer.tmpl.html',
            controller: 'LayoutsComposerController',
            controllerAs: 'vm'
        })
        .state('triangular.layouts-example-full-width', {
            data: {
                layout: {
                    sideMenuSize: 'hidden'
                }
            },
            url: '/layouts/full-width',
            templateUrl: 'app/examples/dashboards/general/dashboard-general.tmpl.html'
        })
        .state('triangular.layouts-example-tall-toolbar', {
            data: {
                layout: {
                    toolbarSize: 'md-tall',
                    toolbarClass: 'full-image-background mb-bg-fb-14'
                }
            },
            url: '/layouts/tall-toolbar',
            templateUrl: 'app/examples/dashboards/server/dashboard-server.tmpl.html',
            controller: 'DashboardServerController',
            controllerAs: 'vm'
        })
        .state('triangular.layouts-example-icon-menu', {
            data: {
                layout: {
                    sideMenuSize: 'icon'
                }
            },
            url: '/layouts/icon-menu',
            templateUrl: 'app/examples/dashboards/general/dashboard-general.tmpl.html'
        });

        triMenuProvider.addMenu({
            name: 'Layouts',
            icon: 'zmdi zmdi-view-module',
            type: 'dropdown',
            priority: 2.4,
            children: [{
                name: 'Standard Page',
                type: 'link',
                state: 'triangular.standard-page'
            },{
                name: 'Non Scrolling Page',
                type: 'link',
                state: 'triangular.no-scroll-page'
            },{
                name: 'Full Width Layout',
                type: 'link',
                state: 'triangular.layouts-example-full-width'
            },{
                name: 'Icon Menu',
                type: 'link',
                state: 'triangular.layouts-example-icon-menu'
            },{
                name: 'Tall Toolbar with background',
                type: 'link',
                state: 'triangular.layouts-example-tall-toolbar'
            },{
                name: 'Composer',
                type: 'link',
                state: 'triangular.layouts-composer'
            }]
        });
    }
})();
