'use strict';

/*jslint bitwise: true */

/**
 * @ngdoc factory
 * @name LoginCtrl
 * @module triangular.authentication
 * @kind function
 *
 * @description
 * Invokes the `iterator` function once for each item in `obj` collection, which can be either an
 * object or an array. The `iterator` function is invoked with `iterator(value, key, obj)`, where `value`
 * is the value of an object property or an array element, `key` is the object property key or
 * array element index and obj is the `obj` itself. Specifying a `context` for the function is optional.
 *
 * It is worth noting that `.forEach` does not iterate over inherited properties because it filters
 * using the `hasOwnProperty` method.
 *
 * Unlike ES262's
 * [Array.prototype.forEach](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.18),
 * Providing 'undefined' or 'null' values for `obj` will not throw a TypeError, but rather just
 * return the value provided.
 *
 */
angular.module('triAngularAuthentication')
.factory('AuthService', function($http, $state, localStorageService, SessionService, ACCESS) {
    var localStoreKey = 'tri-user';

    function getUser() {
        return localStorageService.get(localStoreKey) || {
            email: '',
            password: '',
            access: ACCESS.public
        };
    }

    return {
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
        login: function(user, success, error) {
            $http({
                method: 'GET',
                url: 'data/users.json',
                data: user
            }).
            success(function(data) {
                // this check should be done by your backend server
                // we make the check here of the static json to give an idea
                var foundUser = null;
                angular.forEach(data, function(apiUser) {
                    if(user.email === apiUser.email && user.password === apiUser.password) {
                        foundUser = apiUser;
                        localStorageService.set(localStoreKey, foundUser);
                    }
                });
                if(null !== foundUser) {
                    SessionService.start();
                    success(foundUser);
                }
                else {
                    error();
                }
            }).
            error(error);
        },
        logout: function() {
            localStorageService.remove(localStoreKey);
            SessionService.stop();
            $state.go('public.login');
        }
    };
});
