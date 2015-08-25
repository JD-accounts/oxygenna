(function() {
    'use strict';

    angular
        .module('app.examples.ui')
        .controller('TypographyController', TypographyController);

    /* @ngInject */
    function TypographyController(TypographySwitcher, UI_FONTS) {
        var vm = this;
        vm.fonts = UI_FONTS;
        vm.changeFont = changeFont;
        vm.currentFont = TypographySwitcher.getCurrentFont();

        //////////////////

        function changeFont() {
            TypographySwitcher.changeFont(vm.currentFont);
        }

        // init

        angular.forEach(vm.fonts, function(font) {
            if(vm.currentFont.name === font.name) {
                vm.currentFont = font;
            }
        });
    }
})();