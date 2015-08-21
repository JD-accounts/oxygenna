(function() {
    'use strict';

    angular
        .module('app.examples.layouts')
        .controller('LayoutsComposerController', LayoutsComposerController);

    /* @ngInject */
    function LayoutsComposerController(triLayout) {
        var vm = this;
        vm.changeOption = changeOption;
        vm.sideMenuSize = triLayout.getOption('sideMenuSize');
        console.log(vm.sideMenuSize)
        vm.options = {
            sideMenuSizes: {
                'hidden': 'EXAMPLES.LAYOUTS.OPTIONS.SIDEMENUSIZES.HIDDEN',
                'icon': 'EXAMPLES.LAYOUTS.OPTIONS.SIDEMENUSIZES.ICONS',
                'full': 'EXAMPLES.LAYOUTS.OPTIONS.SIDEMENUSIZES.FULL'
            }
        };

        ////////////////

        function changeOption(optionName) {
            console.log(optionName, vm[optionName]);
            triLayout.setOption(optionName, vm[optionName]);
        }
    }
})();