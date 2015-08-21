(function() {
    'use strict';

    angular
        .module('triangular.components')
        .controller('FooterController', FooterController);

    /* @ngInject */
    function FooterController(triSettings) {
        var vm = this;
        vm.name = triSettings.name;
        vm.date = new Date();
        vm.version = triSettings.version;
    }
})();