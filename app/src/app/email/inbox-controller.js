'use strict';

/**
 * @ngdoc function
 * @name InboxController
 * @module triAngularEmail
 * @kind function
 *
 *
 */



angular.module('triAngularEmail').
controller('InboxController', function ($scope, $filter, emails) {

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

        console.log($scope.emailGroups);
    }

})
.filter('emailGroup', function() {
    return function(emails, emailGroup) {
        return emails.filter(function(email) {
            var emailDate = moment(email.date);
            if(emailDate.isAfter(emailGroup.from) && emailDate.isBefore(emailGroup.to)) {
                return email;
            }
        });
    }
});