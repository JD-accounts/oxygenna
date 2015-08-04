(function() {
    'use strict';

    angular
        .module('triAngularForms')
        .directive('triWizardProgress', TriWizardProgress);

    /* @ngInject */
    function TriWizardProgress() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            require: '^triWizard',
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, triWizard) {
            scope.progressValue = triWizard.progress;
        }
    }
})();