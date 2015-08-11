(function() {
    'use strict';

    angular
        .module('triAngularForms')
        .controller('FormWizardController', FormWizardController);

    /* @ngInject */
    function FormWizardController() {
        var vm = this;
        vm.data = {};
    }
})();