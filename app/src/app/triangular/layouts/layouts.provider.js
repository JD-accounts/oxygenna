(function() {
    'use strict';

    angular
        .module('triangular')
        .provider('triLayout', layoutProvider);

    /* @ngInject */
    function layoutProvider() {
        var layoutDefaults = {
            toolbarSize: 'default',
            toolbarShrink: true,
            toolbarClass: '',
            contentClass: '',
            sideMenuSize: 'full',
            footer: true
        };
        var layout = {};

        this.getDefaultOption = getDefaultOption;
        this.setDefaultOption = setDefaultOption;

        function getDefaultOption(name) {
            return layoutDefaults[name];
        }

        function setDefaultOption(name, value) {
            layoutDefaults[name] = value;
        }

        // init

        angular.extend(layout, layoutDefaults);

        // Service
        this.$get = function($rootScope) {
            $rootScope.$on('$stateChangeStart', function(event, toState) {
                var layoutOverrides = angular.isDefined(toState.data) && angular.isDefined(toState.data.layout) ? toState.data.layout : {};
                angular.extend(layout, layoutDefaults, layoutOverrides);
            });

            function setOption(name, value) {
                layout[name] = value;
            }

            return {
                layout: layout,
                setOption: setOption
            };
        };
    }
})();

