(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    /* @ngInject */
    function config(triLayoutProvider) {
        triLayoutProvider.setOption('toolbarSize', 'default');

        triLayoutProvider.setOption('toolbarShrink', true);

        triLayoutProvider.setOption('toolbarClass', '');

        triLayoutProvider.setOption('contentClass', '');

        triLayoutProvider.setOption('sideMenuSize', 'full');

        triLayoutProvider.setOption('footer', true);
    }
})();