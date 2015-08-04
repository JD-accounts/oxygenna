(function() {
    'use strict';

    angular
        .module('triAngularForms')
        .controller('FormWizardController', FormWizardController);

    /* @ngInject */
    function FormWizardController() {
        var vm = this;
        vm.currentStep = 0;
        vm.forms = {};
        vm.nextStep = nextStep;
        vm.prevStep = prevStep;
        ////////////////

        function nextStep() {
            vm.currentStep = vm.currentStep + 1;
        }

        function prevStep() {
            vm.currentStep = vm.currentStep - 1;
        }
    }
})();