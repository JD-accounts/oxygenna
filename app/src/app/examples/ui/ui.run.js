(function(jQuery) {
    'use strict';

    angular
        .module('app.examples.ui')
        .run(moduleRun);

    /* @ngInject */
    function moduleRun(TypographySwitcher, $rootScope) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
            if(toState.name === 'admin-panel.default.ui-toolbar') {
                // override data in route to change the toolbar
                if(angular.isDefined(toParams.extraClass)) {
                    toState.data.toolbar.extraClass = toParams.extraClass === 'default' ? '' : toParams.extraClass;
                }

                if(angular.isDefined(toParams.background)) {
                    toState.data.toolbar.background = toParams.background === 'off' ? false : 'assets/images/backgrounds/material-backgrounds/mb-bg-33.jpg';
                }

                if(angular.isDefined(toParams.shrink)) {
                    toState.data.toolbar.shrink = toParams.shrink === 'off' ? false : true;
                }
            }

            if(fromState.name === 'admin-panel.default.ui-toolbar' && toState.name !== 'admin-panel.default.ui-toolbar') {
                toState.data.toolbar.extraClass = '';
                toState.data.toolbar.background = false;
                toState.data.toolbar.shrink = true;
            }
        });


        // load up the webfont loader to allow loading google fonts in the demo
        jQuery.ajax({
            url: '//ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js',
            dataType: 'script',
            async: true,
            success: function() {
                // initialise typography switcher (make sure correct font is loaded if one has been selected)
                TypographySwitcher.init();
            }
        });
    }
})(jQuery);