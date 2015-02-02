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
.factory('SessionService', function($state, localStorageService) {
    var localStoreKey = 'tri-session';
    // session timeout set to 10 min
    var sessionTimeout = 1000 * 60 * 5;
    var sessionCheck = null;

    function msToTime(duration) {
        var seconds = parseInt((duration / 1000) % 60)
        , minutes = parseInt((duration / (1000 * 60)) % 60)
        , hours = parseInt((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        return hours + ':' + minutes + ':' + seconds;
    }

    function calculateRemainingTime() {
        var session = localStorageService.get(localStoreKey);
        var now = new Date();
        return session - now.getTime();
    }

    var service = {
        start: function() {
             sessionCheck = setInterval(checkSession, 1000);
        },
        stop: function() {
            clearInterval(sessionCheck);
            localStorageService.remove(localStoreKey);
        },
        reset: function() {
            var now = new Date();
            localStorageService.set(localStoreKey, now.getTime() + sessionTimeout);
        },
        remainingTime: function() {
            var remainingTime = calculateRemainingTime();
            return msToTime(remainingTime);
        },
        remainingPercent: function() {
            var remainingTime = calculateRemainingTime();
            var percent = (remainingTime / sessionTimeout) * 100;
            return percent;
        },
        hasExpired: function() {
            var hasExpired = true;
            var session = localStorageService.get(localStoreKey);
            if(undefined !== session) {
                var now = new Date();
                if(now < session) {
                    hasExpired = false;
                }
            }
            return hasExpired;
        }
    };

    // check for user session timeout
    function checkSession() {
        if(service.hasExpired()) {
            service.stop();
            $state.go('private.blank.user-lock');
        }
    }

    return service;
});
