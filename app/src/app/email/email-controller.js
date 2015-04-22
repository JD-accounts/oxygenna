'use strict';

/**
 * @ngdoc function
 * @name EmailController
 * @module triAngularEmail
 * @kind function
 *
 */

angular.module('triAngularEmail')
.controller('EmailController', function ($scope, $stateParams, $mdDialog, $mdToast, $filter, emails, email, contacts) {
    $scope.email = email;

    $scope.reply = function($event) {
        var replyEmail = {
            to: [],
            cc: [],
            bcc: [],
            // add r.e to subject if there is one
            subject: email.subject === '' ? '' : $filter('translate')('EMAIL.RE') + email.subject,
            // wrap previous content in blockquote and add new line
            content: '<br><br><blockquote>' + email.content + '</blockquote>'
        };

        // get contact and add it to to if replying
        angular.forEach(contacts.data, function(contact) {
            if(contact.email === email.from.email) {
                replyEmail.to.push(contact);
            }
        });

        openEmail($event, replyEmail, $filter('translate')('EMAIL.REPLY'));
    }

    function openEmail($event, dialogEmail, title) {
        $mdDialog.show({
            controller: 'EmailDialogController',
            templateUrl: 'app/email/email-dialog.tmpl.html',
            targetEvent: $event,
            locals: {
                title: title,
                email: dialogEmail,
                contacts: contacts,
                getFocus: true
            },
            focusOnOpen: false
        })
        .then(function(email) {
            $scope.sendEmail(email);
        }, function() {
            $mdToast.show(
                $mdToast.simple()
                .content($filter('translate')('EMAIL.CANCELED'))
                .position('bottom right')
                .hideDelay(3000)
            );
        });
    };
});