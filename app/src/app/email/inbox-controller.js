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
.controller('InboxController', function ($scope, $filter, $location, $mdMedia, $mdBottomSheet, emails) {
    // create email groups using the emails from the resolve
    if(emails.status === 200) {
        $scope.emails = emails.data;

        $scope.emailGroups = [{
            name: $filter('translate')('INBOX.GROUPS.TODAY'),
            from: moment().startOf('day'),
            to: moment().endOf('day')
        },{
            name: $filter('translate')('INBOX.GROUPS.YESTERDAY'),
            from: moment().subtract(1, 'days').startOf('day'),
            to: moment().subtract(1, 'days').endOf('day')
        },{
            name: $filter('translate')('INBOX.GROUPS.OLDER'),
            from: moment().subtract(100, 'years').endOf('day'),
            to: moment().subtract(2, 'days').startOf('day')
        }];

        angular.forEach($scope.emailGroups, function(group) {
            group.emails = $filter('emailGroup')($scope.emails, group);
        });
    }

    // opens an email
    $scope.openMail = function(email) {
        $location.url('/inbox/mail/' + email.id);
    };

    // returns back to email list
    $scope.openlist = function() {
        $location.url('/inbox');
    };

    // keep a watch for changes to size of page
    $scope.$watch(function() {
        // if not a small mobile view don't show the list - unless we are on the /inbox/mail list page
        $scope.showEmailList = !$mdMedia('sm') || $location.path().indexOf('/inbox/mail/') === -1;
    });
});