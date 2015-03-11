'use strict';

/**
 * @ngdoc function
 * @name InboxController
 * @module triAngularEmail
 * @kind function
 *
 *
 */
angular.module('triAngularEmail')
.controller('InboxController', function ($scope, $filter, $location, $mdMedia, $mdBottomSheet, $stateParams, $mdDialog, $mdToast, emails) {
    $scope.inboxBasePath = $location.path();
    // store selected email if we have one
    $scope.selectedMail = null;

    // create email groups using the emails from the resolve
    if(emails.status === 200) {
        $scope.emails = emails.data;

        $scope.emailGroups = [{
            name: $filter('translate')('EMAIL.INBOX.GROUPS.TODAY'),
            from: moment().startOf('day'),
            to: moment().endOf('day')
        },{
            name: $filter('translate')('EMAIL.INBOX.GROUPS.YESTERDAY'),
            from: moment().subtract(1, 'days').startOf('day'),
            to: moment().subtract(1, 'days').endOf('day')
        },{
            name: $filter('translate')('EMAIL.INBOX.GROUPS.OLDER'),
            from: moment().subtract(100, 'years').endOf('day'),
            to: moment().subtract(2, 'days').startOf('day')
        }];

        angular.forEach($scope.emailGroups, function(group) {
            group.emails = $filter('emailGroup')($scope.emails, group);
        });
    }

    // opens an email
    $scope.openMail = function(email) {
        $location.url($scope.inboxBasePath + '/mail/' + email.id);
        email.unread = false;
        $scope.selectedMail = email.id;
    };

    // returns back to email list
    $scope.openlist = function() {
        $location.url($scope.inboxBasePath);
    };

    // opens the compose dialog
    $scope.composeClick = function($event) {
        $mdDialog.show({
            controller: 'ComposeController',
            templateUrl: 'app/email/compose.tmpl.html',
            targetEvent: $event,
            locals: {
                title: $filter('translate')('EMAIL.NEW'),
                email: {
                    to: '',
                    subject: '',
                    content: ''
                }
            }
        })
        .then(function(email) {
            $mdToast.show(
                $mdToast.simple()
                .content($filter('translate')('EMAIL.SENT', {to: email.to}))
                .position('bottom right')
                .hideDelay(3000)
            );
        }, function() {
            $mdToast.show(
                $mdToast.simple()
                .content($filter('translate')('EMAIL.CANCELED'))
                .position('bottom right')
                .hideDelay(3000)
            );
        });
    };

    // keep a watch for changes to size of page
    $scope.$watch(function() {
        // if not a small mobile view don't show the list - unless we are on the$scope.inboxBasePath + /mail list page
        $scope.showEmailList = !$mdMedia('sm') || $location.path().indexOf($scope.inboxBasePath + '/mail/') === -1;
    });
});