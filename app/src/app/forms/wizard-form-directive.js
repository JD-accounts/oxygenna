(function() {
    'use strict';

    angular
        .module('triAngularForms')
        .directive('triWizardForm', WizardFormProgress);

    /* @ngInject */
    function WizardFormProgress() {
        // Usage:

        //
        // Creates:
        //
        var directive = {
            require: ['form', '^triWizard'],
            link: link,
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs, require) {
            var ngFormCtrl = require[0];
            var triWizardCtrl = require[1];
            triWizardCtrl.registerForm(ngFormCtrl);
        }
    }
})();