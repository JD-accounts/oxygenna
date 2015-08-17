(function() {
    'use strict';

    angular
        .module('app')
        .config(translateConfig);

    /* @ngInject */
    function translateConfig(triSettingsProvider) {
        // set app name & logo (used in loader, sidemenu, login pages, etc)
        triSettingsProvider.setName('triangular');
        triSettingsProvider.setLogo('assets/images/logo.png');
        // set current version of app (shown in footer)
        triSettingsProvider.setVersion('1.5.0');

        // setup available languages
        triSettingsProvider.addLanguage({
            name: 'LANGUAGES.CHINESE',
            key: 'zh'
        });
        triSettingsProvider.addLanguage({
            name: 'LANGUAGES.ENGLISH',
            key: 'en'
        });
        triSettingsProvider.addLanguage({
            name: 'LANGUAGES.FRENCH',
            key: 'fr'
        });
        triSettingsProvider.addLanguage({
            name: 'LANGUAGES.PORTUGUESE',
            key: 'pt'
        });
    }
})();