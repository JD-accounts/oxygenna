'use strict';

/**
 * @ngdoc function
 * @name DashboardServerController
 * @module triAngularDashboards
 * @kind function
 *
 *
 */
angular.module('triAngularDashboards').
controller('DashboardAnalyticsController', function ($scope, $timeout, $mdToast, API_CONFIG,$location, $state) {        
    $timeout(function() {
        $mdToast.show({
            template: '<md-toast><span flex>You have new email messages! View them <a href="" ng-click=viewUnread()>here</a></span></md-toast>',
            controller: 'ToastCtrl',
            position: 'bottom right',
            hideDelay: 10000
        });
    }, 5000);
})

.controller('ToastCtrl', function($scope, $mdToast, $state) {
    $scope.viewUnread = function() {        
        $state.go('admin-panel-no-scroll.email.inbox');
    };
});

