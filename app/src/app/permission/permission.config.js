(function() {
    'use strict';

    angular
        .module('app.permission')
        .config(permissionConfig);

    /* @ngInject */
    function permissionConfig($stateProvider, triMenuProvider) {
        $stateProvider
        .state('triangular.permission', {
            url: '/permission',
            templateUrl: 'app/permission/permission.tmpl.html',
        });

        triMenuProvider.addMenu({
            name: 'Permissions',
            icon: 'zmdi zmdi-lock',
            type: 'dropdown',
            priority: 4.1,
            children: [{
                name: 'Menu Permissions',
                state: 'triangular.permission',
                type: 'link'
            }]
        });
    }
})();
