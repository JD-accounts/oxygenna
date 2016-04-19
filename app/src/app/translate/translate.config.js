(function() {
    'use strict';

    angular
        .module('app.translate')
        .config(translateConfig);

    /* @ngInject */
    function translateConfig($translateProvider, $translatePartialLoaderProvider, triSettingsProvider, APP_LANGUAGES) {
        /**
         *  each module loads its own translation file - making it easier to create translations
         *  also translations are not loaded when they aren't needed
         *  each module will have a il8n folder that will contain its translations
         */
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '{part}/il8n/{lang}.json'
        });

        $translatePartialLoaderProvider.addPart('app');
        $translatePartialLoaderProvider.addPart('app/examples/authentication');
        $translatePartialLoaderProvider.addPart('app/examples/calendar');
        $translatePartialLoaderProvider.addPart('app/examples/charts');
        $translatePartialLoaderProvider.addPart('app/examples/dashboards');
        $translatePartialLoaderProvider.addPart('app/examples/elements/');
        $translatePartialLoaderProvider.addPart('app/examples/email');
        $translatePartialLoaderProvider.addPart('app/examples/extras');
        $translatePartialLoaderProvider.addPart('app/examples/forms');
        $translatePartialLoaderProvider.addPart('app/examples/github');
        $translatePartialLoaderProvider.addPart('app/examples/layouts');
        $translatePartialLoaderProvider.addPart('app/examples/maps');
        $translatePartialLoaderProvider.addPart('app/examples/menu');
        $translatePartialLoaderProvider.addPart('app/examples/todo');
        $translatePartialLoaderProvider.addPart('app/examples/ui');

        // make sure all values used in translate are sanitized for security
        $translateProvider.useSanitizeValueStrategy('sanitize');

        // cache translation files to save load on server
        $translateProvider.useLoaderCache(true);

        // setup available languages in translate
        var languageKeys = [];
        for (var lang = APP_LANGUAGES.length - 1; lang >= 0; lang--) {
            languageKeys.push(APP_LANGUAGES[lang].key);
        }

        /**
         *  try to detect the users language by checking the following
         *      navigator.language
         *      navigator.browserLanguage
         *      navigator.systemLanguage
         *      navigator.userLanguage
         */
        $translateProvider
        .registerAvailableLanguageKeys(languageKeys, {
            'en_US': 'en',
            'en_UK': 'en'
        })
        .use('en');

        // store the users language preference in a cookie
        $translateProvider.useLocalStorage();

        // setup available languages in triangular
        for (var language = APP_LANGUAGES.length - 1; language >= 0; language--) {
            triSettingsProvider.addLanguage({
                name: APP_LANGUAGES[language].name,
                key: APP_LANGUAGES[language].key
            });
        }
    }
})();
