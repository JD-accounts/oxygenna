(function() {
    'use strict';

    angular
        .module('triAngularForms')
        .controller('FormWizardController', FormWizardController);

    /* @ngInject */
    function FormWizardController($scope) {
        var vm = this;

        vm.currentStep = 0;
        vm.data = {}
        vm.nextStep = nextStep;
        vm.nextStepDisabled = nextStepDisabled;
        vm.prevStep = prevStep;
        vm.prevStepDisabled = prevStepDisabled;
        ////////////////

        function nextStep() {
            vm.currentStep = vm.currentStep + 1;
        }

        function nextStepDisabled() {
            // get current active form
            var form = $scope.triWizard.getForm(vm.currentStep);
            var formInvalid = true;
            if(undefined !== form && undefined !== form.$invalid) {
                formInvalid = form.$invalid;
            }
            return formInvalid;
        }

        function prevStep() {
            vm.currentStep = vm.currentStep - 1;
        }

        function prevStepDisabled() {
            return vm.currentStep === 0;
        }
    }
})();