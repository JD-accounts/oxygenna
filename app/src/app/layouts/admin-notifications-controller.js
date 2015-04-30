'use strict';

/**
 * @ngdoc function
 * @name AdminNotificationsController
 * @module triAngular
 * @kind function
 *
 * @description
 *
 * Handles the admin view
 */
angular.module('triAngular').
controller('AdminNotificationsController', function ($scope, $http, $mdSidenav, $state, API_CONFIG) {
    // sets the current active tab
    $scope.notificationsTab = 0;

    // add an event to switch tabs (used when user clicks a menu item before sidebar opens)
    $scope.$on('triSwitchNotificationTab', function($event, tab) {
        $scope.notificationsTab = tab;
    });

    // fetch some dummy emails from the API
    $http({
        method: 'GET',
        url: API_CONFIG.url + 'email/inbox',
    }).success(function(data, status, headers, config) {
        $scope.emails = data;
    }).
    error(function(data, status, headers, config) {
        console.error('Cant get email list');
    });

    // create some dummy notification Groups and notifications
    $scope.notificationGroups = [{
        name: 'Twitter',
        notifications: [{
            title: 'Mention from oxygenna',
            icon: 'fa fa-twitter',
            date: moment().startOf('hour'),
        },{
            title: 'Oxygenna',
            icon: 'fa fa-twitter',
            date: moment().startOf('hour'),
        },{
            title: 'Oxygenna',
            icon: 'fa fa-twitter',
            date: moment().startOf('hour'),
        },{
            title: 'Followed by Oxygenna',
            icon: 'fa fa-twitter',
            date: moment().startOf('hour'),
        }]
    },{
        name: 'Server',
        notifications: [{
            title: 'Server Down',
            icon: 'icon-error',
            date: moment().startOf('hour'),
        },{
            title: 'Slow Response Time',
            icon: 'icon-warning',
            date: moment().startOf('hour'),
        },{
            title: 'Server Down',
            icon: 'icon-error',
            date: moment().startOf('hour'),
        }]
    },{
        name: 'Sales',
        notifications: [{
            title: 'Triangular Admin $21',
            icon: 'icon-shopping-cart',
            date: moment().startOf('hour'),
        },{
            title: 'Lambda WordPress $60',
            icon: 'icon-shopping-cart',
            date: moment().startOf('hour'),
        },{
            title: 'Triangular Admin $21',
            icon: 'icon-shopping-cart',
            date: moment().startOf('hour'),
        },{
            title: 'Triangular Admin $21',
            icon: 'icon-shopping-cart',
            date: moment().startOf('hour'),
        },{
            title: 'Lambda WordPress $60',
            icon: 'icon-shopping-cart',
            date: moment().startOf('hour'),
        },{
            title: 'Triangular Admin $21',
            icon: 'icon-shopping-cart',
            date: moment().startOf('hour'),
        }]
    }];

    // create some dummy user settings
    $scope.settingsGroups = [{
        name: 'ADMIN.NOTIFICATIONS.ACCOUNT_SETTINGS',
        settings: [{
            title: 'ADMIN.NOTIFICATIONS.SHOW_LOCATION',
            icon: 'icon-location-on',
            enabled: true
        },{
            title: 'ADMIN.NOTIFICATIONS.SHOW_AVATAR',
            icon: 'icon-face-unlock',
            enabled: false
        },{
            title: 'ADMIN.NOTIFICATIONS.SEND_NOTIFICATIONS',
            icon: 'icon-notifications-on',
            enabled: true
        }]
    },{
        name: 'ADMIN.NOTIFICATIONS.CHAT_SETTINGS',
        settings: [{
            title: 'ADMIN.NOTIFICATIONS.SHOW_USERNAME',
            icon: 'icon-person',
            enabled: true
        },{
            title: 'ADMIN.NOTIFICATIONS.SHOW_PROFILE',
            icon: 'icon-account-box',
            enabled: false
        },{
            title: 'ADMIN.NOTIFICATIONS.ALLOW_BACKUPS',
            icon: 'icon-backup',
            enabled: true
        }]
    }];

    // create some dummy user stats
    $scope.statisticsGroups = [{
        name: 'ADMIN.NOTIFICATIONS.USER_STATS',
        stats: [{
            title: 'ADMIN.NOTIFICATIONS.STORAGE_SPACE',
            value: 60
        },{
            title: 'ADMIN.NOTIFICATIONS.BANDWIDTH_USAGAE',
            value: 10
        }]
    }];

    $scope.openMail = function(email) {
        $state.go('private.admin.toolbar.inbox');
        $scope.close();
    };

    $scope.close = function () {
        $mdSidenav('notifications').close();
    };
});