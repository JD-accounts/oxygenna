(function() {
    'use strict';

    angular
        .module('triangular', [
            'ngMaterial',
            'triangular.layouts', 'triangular.components', 'triangular.themes', 'triangular.profiler', 'triangular.directives',
            'ui.router'
        ]);
})();