(function() {
    'use strict';

    angular
        .module('app.examples.layouts')
        .controller('LayoutsComposerController', LayoutsComposerController);

    /* @ngInject */
    function LayoutsComposerController($rootScope, $filter, $document, triTheming, triLayout) {
        var vm = this;
        vm.allPagesCode = '';
        vm.updateOption = updateOption;
        vm.layout = triLayout.layout;
        vm.onePageCode = '';
        vm.options = {
            toolbarSizes: {
                'default': 'EXAMPLES.LAYOUTS.OPTIONS.TOOLBAR-SIZES.DEFAULT',
                'md-medium-tall': 'EXAMPLES.LAYOUTS.OPTIONS.TOOLBAR-SIZES.MEDIUM',
                'md-tall': 'EXAMPLES.LAYOUTS.OPTIONS.TOOLBAR-SIZES.TALL'
            },
            toolbarBackgrounds: {
            },
            sideMenuSizes: {
                'hidden': 'EXAMPLES.LAYOUTS.OPTIONS.SIDEMENU-SIZES.HIDDEN',
                'icon': 'EXAMPLES.LAYOUTS.OPTIONS.SIDEMENU-SIZES.ICONS',
                'full': 'EXAMPLES.LAYOUTS.OPTIONS.SIDEMENU-SIZES.FULL'
            }
        };

        ////////////////

        function createCodeSnippets() {
            vm.allPagesCode =
                'triLayoutProvider.setOption(\'toolbarSize\', \'' + vm.layout.toolbarSize + '\');\n' +
                'triLayoutProvider.setOption(\'toolbarShrink\', ' + vm.layout.toolbarShrink + ');\n' +
                'triLayoutProvider.setOption(\'toolbarClass\', \'' + vm.layout.toolbarClass + '\');\n' +
                'triLayoutProvider.setOption(\'contentClass\', \'' + vm.layout.contentClass + '\');\n' +
                'triLayoutProvider.setOption(\'sideMenuSize\', \'' + vm.layout.sideMenuSize + '\');\n' +
                'triLayoutProvider.setOption(\'footer\', ' + vm.layout.footer + ');\n';

        }

        function updateOption(optionName) {
            switch(optionName) {
                case 'footer':
                    var style = vm.layout.footer ? 'block' : 'none';
                    document.getElementById('footer').style.display = style;
                break;
                case 'toolbarShrink':
                    // update toolbar shrink
                    // needs some work
                    var mdContent = angular.element('#admin-panel md-content');
                    $rootScope.$broadcast('$mdContentLoaded', angular.element(mdContent[0]));
                break;
            }
            // update the snippets
            createCodeSnippets();
        }

        function createBackgroundOptions() {
            vm.options.toolbarBackgrounds['none'] = 'No Background ';
            for(var x = 1; x < 40 ; x++) {
                var paddedNumber = $filter('padding')(x, 2);
                vm.options.toolbarBackgrounds['material-background mb-bg-' + paddedNumber] = 'Background ' + x;
            }
            for(var x = 1; x < 30 ; x++) {
                var paddedNumber = $filter('padding')(x, 2);
                vm.options.toolbarBackgrounds['material-background mb-bg-fb-' + paddedNumber] = 'Extra Background ' + x;
            }
        }

        // init
        createBackgroundOptions();
        createCodeSnippets();
    }
})();