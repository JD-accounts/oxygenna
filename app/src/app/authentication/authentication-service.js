'use strict';

angular.module('triAngularAuthentication')
.factory('AuthService', function($http, $state, $mdToast, localStorageService, SessionService, ACCESS, API_CONFIG) {
    var localStoreKey = 'tri-user';

    function getUser() {
        return localStorageService.get(localStoreKey) || {
            email: '',
            password: '',
            access: ACCESS.public
        };
    }

    return {
        login: function(user, success, error) {
            $http({
                method: 'POST',
                url: API_CONFIG.url + 'login',
                data: user
            }).
            success(function(data) {
                success(data);
                // // this check should be done by your backend server
                // // we make the check here of the static json to give an idea
                // var foundUser = null;
                // angular.forEach(data, function(apiUser) {
                //     if(user.email === apiUser.email && user.password === apiUser.password) {
                //         foundUser = apiUser;
                //         localStorageService.set(localStoreKey, foundUser);
                //     }
                // });
                // if(null !== foundUser) {
                //     SessionService.reset();
                //     SessionService.start();
                //     success(foundUser);
                // }
                // else {
                //     error();
                // }
            }).
            error(function(data) {
                error(data);
            });
        },
        authorise: function(access) {
            // authorisation and session management should be handled by your backend server
            // we use a cookie here to mock the request to get the user
            var user = getUser();
            SessionService.reset();
            return access & user.access;
        },
        isLoggedIn: function() {
            return localStorageService.get(localStoreKey) !== undefined;
        },
        getUser: getUser,
        logout: function() {
            localStorageService.remove(localStoreKey);
            SessionService.stop();
            $state.go('public.login');
        }
    };
});
