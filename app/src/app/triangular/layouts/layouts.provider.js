(function() {
    'use strict';

    angular
        .module('triangular')
        .provider('triLayout', layoutProvider);

    /* @ngInject */
    function layoutProvider() {
        // Provider
        var layout = {
            sideMenuSize: 'full'
        };

        this.getOption = getOption;
        this.setOption = setOption;

        function getOption(name) {
            return layout[name];
        }

        function setOption(name, value) {
            layout[name] = value;
        }

        // Service
        this.$get = function() {
            return {
                layout: layout,
                getOption: getOption,
                setOption: setOption
            };
        };
    }
})();

