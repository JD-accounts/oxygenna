(function() {
    'use strict';

    angular
        .module('app.permission')
        .run(permissionRun);


    function permissionRun($rootScope, $state, PermissionStore) {
        PermissionStore
        .definePermission('viewTodo', function (permissionName) {
            if('viewTodo' === permissionName) {
                return false;
            }
            return true;
        });

        // redirect all denied permissions to 401
        $rootScope.$on('$stateChangePermissionDenied', function() {
            $state.go('401');
        });
    }
})();
