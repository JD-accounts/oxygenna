(function() {
    'use strict';

    angular
        .module('triAngularForms')
        .directive('triWizard', TriWizard);

    /* @ngInject */
    function TriWizard() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: WizardController,
            controllerAs: 'vm',
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            console.log('link')
        }
    }

    /* @ngInject */
    function WizardController($scope) {
        var vm = this;

        var forms = [];
        var totalErrors = 0;
        var fixedErrors = 0;

        vm.registerForm = registerForm;
        vm.progress = 0;
        ////////////////

        function registerForm(form) {
            forms.push(form);
        }

        $scope.$watch(watchForms);

        function watchForms() {
            var errorCount = 0;
            var isPristine = true;
            for (var form = forms.length - 1; form >= 0; form--) {
                // check if we have an unpristine form
                if(forms[form].$pristine === false) {
                    isPristine = false;
                }
                if(forms[form].$error !== undefined) {
                    for(var error in forms[form].$error) {
                        errorCount += forms[form].$error[error].length;
                    }
                }
            }
            // if we are pristine set the total errors to this
            if(isPristine === true) {
                totalErrors = errorCount;
            }
            // find out how many errors remain
            fixedErrors = totalErrors - errorCount;

            // calculate peercentage process for completing the wizard
            vm.progress = Math.floor((fixedErrors / totalErrors) * 100);
        }

    }
})();