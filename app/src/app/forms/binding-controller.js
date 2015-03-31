'use strict';

/**
 * @ngdoc function
 * @name BindingController
 * @module triAngularElements
 * @kind function
 *
 * @description
 *
 * Handles binding forms page
 */
angular.module('triAngularForms').
controller('BindingController', function ($scope) {
    $scope.user = {
        username: '',
        password: '',
        description: '',
        favouriteColor: ''
    };
});