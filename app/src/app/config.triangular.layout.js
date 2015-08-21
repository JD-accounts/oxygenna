(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    /* @ngInject */
    function config(triLayoutProvider) {

        triLayoutProvider.setOption('sideMenuSize', 'full');
    }
})();